import React, {Component} from "react";
import NavBar from "../components/NavBar";
import News from './News'

class App extends Component{
    
    render() {
        return(
            <div>
                <NavBar />
                {/* "Insert your API Key to run on your localhost" */}
                <News apiKey="Your apiKey" category="science" pageSize={15} />
            </div>
        );
    }
}

export default App;
