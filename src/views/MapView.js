import React, {Component} from "react";

import SimpleMap from "./components/SimpleMap/SimpleMap.js";
import BackButton from "./components/BackButton/BackButton.js";

import "../styles/MapView.css";

class MapView extends Component {
    render() {
        return (
            <div>
                <SimpleMap />
                <BackButton />
            </div>
        );
    }
}

export default MapView;