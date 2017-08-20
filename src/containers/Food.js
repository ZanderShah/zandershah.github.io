import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import LegendControl from '../components/LegendControl';
import L from 'leaflet';

const position = [43.650270, -79.388800];
const lightUrl = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=';

const lis = {
  padding: '5px',
  borderBottom: '1px solid #ccc',
}

class Food extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetch('/api/food-map')
      .then((res) => res.json())
      .then((res) => this.setState({
        meals: res.meals,
        token: res.token
      }));
  }

  render = () => {
    if (this.state.token) {
      return (
        <div id='mapbox-div'>
          <Map center={position} zoom={15} style={{flexGrow: 1}} attributionControl={false}>
            <TileLayer url={lightUrl + this.state.token} attribution='' />
            {this.state.meals.map((meal, i) =>
              <Marker key={i} position={meal['position']} color='red' style={{color: 'red'}}>
                <Popup>
                  <h5>{meal['name']}</h5>
                </Popup>
              </Marker>
            )}
            <LegendControl style={{backgroundColor: 'white', border: '2px solid rgba(0,0,0,0.2)', borderRadius: '4px'}}>
              <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
                <li style={lis}>Filtering</li>
                <li style={lis}>Options</li>
                <li style={lis}>Available</li>
                <li style={{...lis, ...{borderBottom: 0}}}>Soon</li>
              </ul>
            </LegendControl>
            </Map>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Food;