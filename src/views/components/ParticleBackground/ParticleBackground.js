import React, {Component} from 'react';
import Particles from 'react-particles-js';

import "./ParticleBackground.css";

class ParticleBackground extends Component {
    render() {
        return (
            <Particles id="particle-bg"
                style={{
                    backgroundColor: `#353C51`}}
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

export default ParticleBackground;