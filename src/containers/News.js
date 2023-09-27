import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import articles from "../Articles";
import defaultImage from '../imageNotAvailable.png'

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Company - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage===null? defaultImage: element.urlToImage}
                  newsUrl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
