import React from 'react';
import logo from './logo.svg';
// import './App.css';
//import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 4
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyD63DJnMsk_0ukVFEoA4hm-AkfnoE4a_3c'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatmapData}
                >
                    <Marker
                        lat={37.7749}
                        lng={-122.4194}
                        name="My Marker"
                        color="transparent"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

 const heatmapData = {
     positions: [
         {lat: 37.7749, lng: -122.4194},
         {lat: 37.7749, lng: -122.4194},
     ],
     options: {
         radius: 20,
         opacity: 0.6,
     }
 }

export default SimpleMap;
