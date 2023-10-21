import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import defaultImage from "../imageNotAvailable.png";
import Spinner from "../components/loading";
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.toUpperCase().charAt(0) + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }

  async fetchData(page, progress=true) {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      progress && this.props.setProgress(15);
      const response = await fetch(url);
      
      if (!response.ok) {
        const errData = await response.json();
        throw errData.message;
      }
      
      const data = await response.json();
      progress && this.props.setProgress(70);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  async componentDidMount() {
    try {
      const parsedData = await this.fetchData(this.state.page);
      this.props.setProgress(100);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  }
  
  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      window.scrollTo(0,0); 
      try {
        const parsedData = await this.fetchData(1);
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: 1,
          totalResults: parsedData.totalResults,
          loading: false,
        });
        this.props.setProgress(100);
        document.title = `${this.capitalizeFirstLetter(
          this.props.category
          )} News: Code Company`;
        } catch (error) {
          throw error;
        }
      }
    }
    
    fetchMoreData = async () => {
      this.setState({
        page: this.state.page + 1,
      });
      const data = await this.fetchData(this.state.page + 1, false);
      // Empty articles encounter
      if(data.articles.length < 1) {
        this.setState({
          totalResults: this.state.articles.length,
        })
      }
      
      this.setState({
        articles: this.state.articles.concat(data.articles),
        loading: false,
      });
    };
    
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">
            {this.capitalizeFirstLetter(this.props.category)}: Top Headlines
          </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container">
              <div className="row justify-content-center">
                {this.state.articles.map((element, index) => {
                  return (
                    <div className="col-md-auto" key={index}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 100) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageUrl={
                          element.urlToImage === null
                            ? defaultImage
                            : element.urlToImage
                        }
                        newsUrl={element.url}
                        source={
                          element.source.name
                            ? element.source.name.slice(0, 15)
                            : "UNKNOWN"
                        }
                        date={element.publishedAt.slice(0, 10).split("-")}
                      ></NewsItem>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default News;
