import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { c, t_maps } from '../utils/constants';

const position = [43.650270, -79.388800];
const lightUrl = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: t_maps
    };
  }

  render() {
    return (
      <div id='mapbox-div'>
        <Map center={position} zoom={15} style={{flexGrow: 1}} attributionControl={false}>
          <TileLayer url={lightUrl + c['mapboxAccessToken']} attribution='' />
          {this.state.meals.map((meal, i) =>
            <Marker key={i} position={meal['position']}>
              <Popup>
                <span>{meal['name']}</span>
              </Popup>
            </Marker>
          )}
          </Map>
      </div>
    );
  }
}

export default Food;