import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import NavHoverable from '../components/NavHoverable';
import c from '../utils/constants';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: [51.505, -0.09],
        info: 'Temp',
      }]
    };
  }

  render() {
    const position = [51.505, -0.09];
    const darkUrl = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=';

    return (
      <div>
        <Map center={position} zoom={13} style={{width: '100%', margin: 0, height: '1000px'}} attributionControl={false}>
          <TileLayer url={darkUrl + c['mapboxAccessToken']} attribution='' />
          {this.state.markers.map((data) =>
            <Marker position={data['position']}>
              <Popup>
                <span>{data['info']}</span>
              </Popup>
            </Marker>
          )}
        </Map>
      </div>
    );
  }
}

export default Food;