import React,{useState} from "react";
import "./SimpleMap.css";
import GoogleMapReact,{InfoWindow} from "google-map-react";

import Marker from "../Markers/Marker.js";
import {fitBounds} from "google-map-react/utils";

import * as disasterData from "./thing.json"

class SimpleMap extends React.Component {

    constructor(props){
        super(props);
        this.state = {showInfoWindow : false};
    }

    handleMouseOver = e => {
        console.log("hi");
        /*this.setState({
            showInfoWindow: true
        });*/
    }

    handleMouseExit = e => {
        console.log("bye");
        /*this.setState({
            showInfoWindow: false
        });*/
    }

    static defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 4.7
    };

    /*componentDidMount(){
        this.watchForNativeMouseLeave();
    }*/

    /*watchForNativeMouseLeave(){
        this.refs.hoverElement.addEventListener('mouseleave', () => {
            this.handleMouseExit();
        })
    }*/
    

    mapOptions() {
        return {
            styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
                },
                {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
                },
                {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
                },
                {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
                },
                {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
                },
                {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
                },
                {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
                },
                {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
                },
                {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
                },
                {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
                },
                {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
                },
                {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
                },
                {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
                },
                {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
                },
                {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
                }
            ],
            gestureHandling: 'none',
            
        }
    }
    render() {
        //const [selectedMarker, setSelectedMarker] = useState(null);

        //const beaches=["a place", 37.7749, -122.4194]
        const bounds = {
            nw: {
                lat: 24.9493,
                lng: -125.0011
              },
              se: {
                lat: 49.5904,
                lng: -75.3326//-66.9326
              }
        };
        //Throwaway
        const lasize = {
            width: 700,
            height: 500
        }

        const lacenter = fitBounds(bounds, lasize);

        return (
            // Important! Always set the container height explicitly
            <div style = {{height: "100vh", width: "100%"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyD63DJnMsk_0ukVFEoA4hm-AkfnoE4a_3c'}}
                    defaultCenter={lacenter.center}
                    //center = {fitBounds(this.props.USAbounds)}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatmapData}
                    options = {this.mapOptions}
                >
                    {disasterData.features.map((disaster) => (
                        <Marker 
                            lat = {disaster.coordinates[0]}
                            lng = {disaster.coordinates[1]}
                            name = "things"
                            color = "transparent"
                            ref = 'hoverElement'
                            //onMouseEnter={this.handleMouseOver}
                            //onMouseLeave = {this.handleMouseExit}
                        >
                            {this.state.showInfoWindow && (
                            <InfoWindow>
                                <div> 
                                    hi
                                </div>
                            </InfoWindow>
                        )}
                        </Marker>
                    ))}
    

                </GoogleMapReact>
            </div>
        );

    }
}


const heatmapData = {
    positions: [
        {lat: 37.7749, lng: -122.4194},
        {lat: 37.7749, lng: -110.4194},
    ],
    options: {
        radius: 200,
        opacity: 0.6,
        //gradient: ["green", "yellow", "red"]
    }
    
}

export default SimpleMap;