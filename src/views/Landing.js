import React, {Component} from 'react';

import LandingTitle from './components/LandingTitle/LandingTitle.js';
import LandingButton from "./components/LandingButton/LandingButton.js";

import Particles from 'react-particles-js';
import "../styles/Landing.css";

class Landing extends Component {
    render() {
        return (
            <Particles />
        );
    }
}

export default Landing;