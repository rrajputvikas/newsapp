import React, {Component} from "react";

class NewsItem extends Component {


    render() {
        const {title, description, imageUrl, newsUrl, source,  date} = this.props;
        return(
            <div className="my-4 ">
                <div className="card mx-auto" style={{width: "21rem"}}>
                    <div className="position-relative" style={{height: '200px', fontSize: '80%'}}>
                        <img src={imageUrl} alt="News Updates" className="card-img-top" style={{width: '100%', height: '100%'}}/>
                        <span id='source' className="position-absolute card-source"></span>
                        <span id='source' className="position-absolute drop-shadow">Source: {source}</span>

                        <span id='date' className="position-absolute card-date"></span>
                        <span id='date' className="position-absolute drop-shadow">{date.reverse().join('-')}</span>
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