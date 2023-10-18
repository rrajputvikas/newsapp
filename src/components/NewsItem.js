import React, {Component} from "react";

class NewsItem extends Component {


    render() {
        const {title, description, imageUrl, newsUrl, author,  date} = this.props;
        return(
            <div className="my-4 ">
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <div className="position-relative" style={{height: '200px', fontSize: '80%'}}>
                        <img src={imageUrl} alt="News Updates" className="card-img-top" style={{width: '100%', height: '100%'}}/>
                        <span id='author' className="position-absolute card-author"></span>
                        <span id='author' className="position-absolute">Author: {author}...</span>

                        <span id='date' className="position-absolute card-date"></span>
                        <span id='date' className="position-absolute">{date.reverse().join('-')}</span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">Read More...</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;