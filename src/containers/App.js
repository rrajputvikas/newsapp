import React, {Component} from "react";
import NavBar from "../components/NavBar";
import News from './News';

class App extends Component{

    constructor() {
        super();
        this.state = {
            country: 'in',
            pageSize: 15,
            category: 'general',
        }
    }
    
    setChoice = (category) => {
        this.setState({category: category});
    }

    render() {
        return(
            <div>
                <NavBar setChoice={this.setChoice}/>
                {/* "Insert your API Key to run on your localhost" */}
                <News apiKey="API Key Here.." category={this.state.category} pageSize={15} />
            </div>
        );
    }
}

export default App;
