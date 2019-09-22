import React, {Component} from "react";

import SimpleMap from "./components/SimpleMap/SimpleMap.js";
import BackButton from "./components/BackButton/BackButton.js";
import axios from "axios";

import "../styles/MapView.css";

class MapView extends Component {

    getHurr( ) {
        let url = "/api/Hurricanes/";
        axios.get(url)
            .then(result => {console.log(result.data)})
            .catch(error => {console.log(error)})
    }

    getEQ( ) {
        let url = "/api/Earthquakes/";
        axios.get(url)
            .then(result => {console.log(result.data)})
            .catch(error => {console.log(error)})
    }

    render() {
        this.getHurr();
        this.getEQ();
        return (
            <div>
                <SimpleMap />
                <BackButton />
            </div>
        );
    }
}

export default MapView;