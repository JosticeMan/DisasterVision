import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./BackButton.css";

class BackButton extends Component {
    render() {
        return (
            <Link id="link-bck" to="/">Home</Link>
        );
    }
}

export default BackButton;