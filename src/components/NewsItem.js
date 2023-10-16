import React, {Component} from "react";

class NewsItem extends Component {


    render() {
        const {title, description, imageUrl, newsUrl} = this.props;
        return(
            <div className="my-4 ">
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <div style={{height: '200px'}}>
                        <img src={imageUrl} alt="News Updates" className="card-img-top" style={{width: '100%', height: '100%'}}/>
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