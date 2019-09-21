import React, {Component} from 'react';
import "../styles/Landing.css";

import LandingTitle from './components/LandingTitle/LandingTitle.js';
import LandingButton from "./components/LandingButton/LandingButton.js";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

class Landing extends Component {
    render() {
        return (
            <div id="lpg">
                <ParticleBackground />
                <div id="lpg-flex">
                    <LandingTitle />
                    <LandingButton />
                </div>
            </div>
        );
    }
}

export default Landing;