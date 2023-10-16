import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import defaultImage from "../imageNotAvailable.png";
import Spinner from "../components/loading";
import propTypes from 'prop-types';

class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general',
  }
  
  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }

  async fetchData(page) {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response is not ok. Check your apiKey-(typo) or requesting server down");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async componentDidMount() {
    try {
      const parsedData = await this.fetchData(this.state.page);
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
    if(prevProps.category !== this.props.category) {
      try {
        const parsedData = await this.fetchData(1);
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: 1,
          totalResults: parsedData.totalResults,
          loading: false,
        });
      }
      catch (error) {
        throw error;
      }
    }
  }

  nextClicked = async () => {
    if (
      this.state.page <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      try {
        const parsedData = await this.fetchData(this.state.page + 1);
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page + 1,
          loading: false,
        });
      } catch (error) {
        throw error;
      }
    }
  };

  prevClicked = async () => {
    try {
      const parsedData = await this.fetchData(this.state.page - 1);
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">{this.props.category.toUpperCase().charAt(0)+this.props.category.slice(1)}: Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row justify-content-center">
            {!this.state.loading && this.state.articles.map((element, index) => {
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
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-end fixed-bottom">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.prevClicked}
            className="btn btn-warning m-2"
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            onClick={this.nextClicked}
            className="btn btn-warning m-2"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
