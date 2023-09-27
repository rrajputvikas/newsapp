import React, {Component} from "react";
import NavBar from "../components/NavBar";
import News from './News'

class App extends Component{
    
    render() {
        return(
            <div>
                <NavBar />
                <News />
            </div>
        );
    }
}

export default App;
