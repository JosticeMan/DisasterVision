import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Landing from "./Landing.js";
import MapView from "./MapView.js";

class App extends Component {
    render = () => {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Landing}></Route>
                    <Route path="/map" component={MapView}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
