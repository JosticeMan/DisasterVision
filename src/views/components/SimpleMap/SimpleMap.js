import React from "react";
import "./SimpleMap.css";
import GoogleMapReact from "google-map-react";

import Marker from "../Markers/Marker.js";
import {fitBounds} from "google-map-react/utils";


class SimpleMap extends React.Component {



    static defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 4.7
    };
    

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