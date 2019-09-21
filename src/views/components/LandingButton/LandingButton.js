import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./LandingButton.css";

class LandingButton extends Component {
    render() {
        return (
            <div id="linkbtn">
                <Link id="link" to="/map"> View Map </Link>
            </div>
        );
    }
}

export default LandingButton;