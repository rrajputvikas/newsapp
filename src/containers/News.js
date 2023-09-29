import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import defaultImage from "../imageNotAvailable.png";

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }

  apiKey = "Insert your API Key to run on your localhost";
  async componentDidMount() {
    const url =
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=15`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  prevClicked = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.apiKey}&page=${this.state.page - 1}&pageSize=15`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    });
  }

  nextClicked = async  () => {
    if(this.state.page <= Math.ceil(this.state.totalResults / 15)) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.apiKey}&page=${this.state.page + 1}&pageSize=15`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1
      })
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center">News Company - Top Headlines</h2>
          <div className="row">
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
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-end sticky-bottom">
          <button disabled= {this.state.page<=1} type="button" onClick={this.prevClicked} className="btn btn-warning m-2">
            &larr; Prev
          </button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/15)} type="button" onClick={this.nextClicked} className="btn btn-warning m-2">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
