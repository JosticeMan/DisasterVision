import React,{useState} from "react";
import "./SimpleMap.css";
import GoogleMapReact,{InfoWindow} from "google-map-react";

import Marker from "../Markers/Marker.js";
import {fitBounds} from "google-map-react/utils";
import axios from "axios";

class SimpleMap extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showInfoWindow : false,
            hurricanes : [],
            earthquakes: [],
            heatMapData: {positions: []}, 
            loading : true      
        };
        this.getHurr(); 
        this.getEQ();
    }

    static defaultProps = {
        center: {
            lat: 37.7749,
            lng: -122.4194
        },
        zoom: 4.7
    };

    getDisaster(){

    }

    getHurr( ) {
        let url = "/api/Hurricanes/";
        axios.get(url)
            .then(result => {
                this.setState({hurricanes: result.data});
                
                this.setState({heatMapData: {
                    positions: this.state.hurricanes.map((disaster) => {
                        
                        return {
                            lat: parseFloat(disaster.lat),
                            lng: parseFloat(disaster.lng)
                        }
                        
                    }),
                    options: {
                        radius: 50,
                        opacity: 0.6,
                    }  
                }, loading: false}) 
            })
            .catch(error => {console.log(error)})
    }


    getEQ( ) {
        let url = "/api/Earthquakes/";
        axios.get(url)
            .then(result => {
                this.setState({earthquakes: result.data.features})
                this.setState({heatMapData: {
                    positions: this.state.earthquakes.map((disaster) => {
                        
                        return {
                            lat: parseFloat(disaster.geometry.coordinates[1]),
                            lng: parseFloat(disaster.geometry.coordinates[0])
                        }
                        
                    }),
                    options: {
                        radius: 50,
                        opacity: 0.6,
                    }  
                }, loading: false}) 
            })
            .catch(error => {console.log(error)})
    }


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
            //gestureHandling: 'none',
            
        }
    }
    render() {
        if(this.state.loading){
            return <div> </div>
        }
        else{
            //US BOUNDS
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
            //Throwaway for bounds
            const lasize = {
                width: 700,
                height: 500
            }
            //Get Center
            const lacenter = fitBounds(bounds, lasize);

            return (
                // Important! Always set the container height explicitly
                <div style = {{height: "100vh", width: "100%"}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: 'AIzaSyD63DJnMsk_0ukVFEoA4hm-AkfnoE4a_3c'}}
                        defaultCenter={lacenter.center}
                        defaultZoom={this.props.zoom}
                        heatmapLibrary={true}
                        heatmap={this.state.heatMapData}
                        options = {this.mapOptions}
                    >
                        {console.log(this.state.hurricanes)}
                        {this.state.hurricanes.map((disaster) => (
                            <Marker 
                                lat = {parseFloat(disaster.lat)}
                                lng = {parseFloat(disaster.lng)}
                                name = "things"
                                color = "transparent"
                            >
                            )}
                            </Marker>
                        ))}
                    </GoogleMapReact>
                </div>
            );
        }

    }
}




export default SimpleMap;