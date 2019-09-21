import React, {Component} from 'react';

import LandingTitle from './components/LandingTitle/LandingTitle.js';
import LandingButton from "./components/LandingButton/LandingButton.js";

import Particles from 'react-particles-js';
import "../styles/Landing.css";

class Landing extends Component {
    render() {
        return (
            <Particles
                style={{
                    width: '100%',
                    backgroundColor: `#000080`
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        );
    }
}

export default Landing;