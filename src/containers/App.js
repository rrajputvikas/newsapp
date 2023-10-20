import React, {Component} from "react";
import NavBar from "../components/NavBar";
import News from './News';
import LoadingBar from "react-top-loading-bar";

class App extends Component{

    constructor() {
        super();
        this.state = {
            country: 'in',
            pageSize: 15,
            category: 'general',
            progress: 0,
        }
    }
    
    setChoice = (category) => {
        this.setState({category: category});
    }

    setProgress = (progress) => {
        this.setState({
            progress: progress
        });
    }

    render() {
        return(
            <div>
                <LoadingBar 
                    color='#FFCA2C'
                    progress={this.state.progress}
                />
                <NavBar setChoice={this.setChoice}/>
                <News apiKey={process.env.REACT_APP_NEWS_API} setProgress={this.setProgress} category={this.state.category} pageSize={15} />
            </div>
        );
    }
}

export default App;
