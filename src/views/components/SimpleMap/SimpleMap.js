import React from "react";
import GoogleMapReact from "../../App";

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