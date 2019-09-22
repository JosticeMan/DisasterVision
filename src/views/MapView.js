import React, {Component} from "react";

import SimpleMap from "./components/SimpleMap/SimpleMap.js";
import BackButton from "./components/BackButton/BackButton.js";
import axios from "axios";

import "../styles/MapView.css";

class MapView extends Component {

    getHurr( state ) {
        let url = "/api/Hurricanes/" + state;
        axios.get(url)
            .then(result => {console.log(result.data)})
            .catch(error => {console.log(error)})
    }

    render() {
        this.getHurr("TX");
        return (
            <div>
                <SimpleMap />
                <BackButton />
            </div>
        );
    }
}

export default MapView;