import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SearchImage from "./components/image/SearchImage";
import HandleVideo from "./components/video/HandleVideo";


class App extends Component {


    render() {
        return (
            <Router>
                <div className='App'>
                    <Route path='/' exact>
                        <h1>Hello from Swann</h1>
                        <h2>
                            Search some image <Link to='/image'>here</Link><br/>
                            Search for videos <Link to='/video'>here</Link>
                        </h2>
                    </Route>
                    <Route path='/image' exact>
                        <h1>Hello from Swann</h1>
                        <h2>
                            Back to <Link to='/'>Home</Link>?
                        </h2>
                        <SearchImage/>
                    </Route>
                    <Route path='/video' exact>
                        <h1>Hello from Swann</h1>
                        <h2>
                            Back to <Link to='/'>Home</Link>?
                        </h2>
                        <HandleVideo/>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;