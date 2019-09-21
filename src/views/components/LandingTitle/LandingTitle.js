import React, {Component} from 'react';

import './LandingTitle.css';

import logo from "../../../graphics/logo.svg";

class LandingTitle extends Component {
    render() {
        return (
            <div id="lt-div">
                <img id="lt-img" src={logo} alt="Main Logo"/>
            </div>
        );
    }
}

export default LandingTitle;