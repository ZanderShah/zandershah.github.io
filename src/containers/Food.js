import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { c, t_maps } from '../utils/constants';

class Food extends Component {
  constructor(props) {
    super(props);
    // var tempMeals = []
    // for (var i = 0; i < 100; i++) {
    //   tempMeals.push({
    //     name: 'Name' + i,
    //     info: 'Info' + i,
    //     location: [i, i],
    //     rating: i % 5 + 1,
    //     tags: ['A', 'B'],
    //   })
    // }
    this.state = {
      meals: t_maps
    };
  }

  render() {
    const position = [43.650270, -79.388800];
    const darkUrl = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=';
    const lightUrl = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=';

    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: '5px'}}>Toronto Meals</h1>
        <h5 style={{marginTop: '5px'}}>{this.state.meals.length} places I ate lunch at over my summer 2017 coop</h5>
        <Map center={position} zoom={15} style={{width: '90vw', margin: '0 5vw', height: '500px'}} attributionControl={false}>
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