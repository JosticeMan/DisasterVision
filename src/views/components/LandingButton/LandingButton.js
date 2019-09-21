import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingButton extends Component {
    render() {
        return (
            <Link to="/map"> View Map </Link>
        );
    }
}

export default LandingButton;