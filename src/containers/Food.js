import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import LegendControl from '../components/LegendControl';

const position = [43.650270, -79.388800];
const lightUrl = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=';
const darkUrl = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=';

const lis = {
  padding: '5px',
  borderBottom: '1px solid #ccc',
}

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    fetch('/api/food-map')
      .then((res) => {
        return res.json();
        // return {"meals":[{"name":"The Clubhouse Sandwich Shop","position":[43.658209,-79.399693]},{"name":"Carver","position":[43.647513,-79.392702]},{"name":"Bolets Burrito","position":[43.650048,-79.367975]},{"name":"Me Va Me","position":[43.65022,-79.390668]},{"name":"The Jerk Joint, Gushi, Panino Cowboy, My Sandwich","position":[43.650131,-79.390412]},{"name":"Burger Factory","position":[43.650104,-79.389176]},{"name":"Kimama Donburies","position":[43.645732,-79.389883]},{"name":"Burrito Gordito","position":[43.647974,-79.393309]},{"name":"Souvlaki House","position":[43.653718,-79.390903]},{"name":"330 Takeout","position":[43.650034,-79.381209]},{"name":"The Office Pub","position":[43.648142,-79.390152]},{"name":"Corned Beef House","position":[43.647986,-79.390102]},{"name":"Smoke's Poutinerie","position":[43.658209,-79.399693]},{"name":"Fat Bastard Burrito","position":[43.648231,-79.389256]},{"name":"Baba Geddo","position":[43.649741,-79.389116]},{"name":"The Burger's Priest","position":[43.648569,-79.387442]},{"name":"PAI","position":[43.647869,-79.388685]},{"name":"Illstyl3 Sammies","position":[43.649023,-79.391551]},{"name":"SU&BU","position":[43.647245,-79.390158]},{"name":"Kanga Aussie Meat Pies","position":[43.649994,-79.389098]},{"name":"Touhenboku Ramen","position":[43.65016,-79.389103]},{"name":"Queen Street Warehouse","position":[43.650183,-79.390188]},{"name":"Chipotle Mexican Grill","position":[43.649569,-79.391649]},{"name":"Mi Taco Taqueria","position":[43.650272,-79.388705]},{"name":"Mucho Burrito","position":[43.65011,-79.389144]},{"name":"Ebisu","position":[43.650548,-79.389067]},{"name":"Kinton Ramen","position":[43.648691,-79.397202]},{"name":"Corrado's","position":[43.647943,-79.390621]},{"name":"Mr. Souvlaki","position":[43.651177,-79.38418]},{"name":"Burrito Boyz","position":[43.648478,-79.388055]},{"name":"Basil Box","position":[43.648688,-79.396021]},{"name":"Buna's Kitchen","position":[43.648312,-79.395246]},{"name":"Ginger","position":[43.650384,-79.389186]},{"name":"Sushi Cafe","position":[43.646237,-79.383325]},{"name":"Freshii","position":[43.648336,-79.385674]},{"name":"Kathi Roll Express, Fugo Deserts, District 28, La Fiesta, Toben (Adelaide Eats)","position":[43.649564,-79.384646]},{"name":"Pita Pit","position":[43.647726,-79.391975]},{"name":"Subway","position":[43.650097,-79.389208]},{"name":"Jimmy The Greek","position":[43.647138,-79.382704]},{"name":"GB Hand-Pulled Noodles","position":[43.656641,-79.383747]},{"name":"Sweet Jesus","position":[43.6484533,-79.3893099]},{"name":"Z-Teca","position":[43.646235,-79.39074]},{"name":"Oh My Gyro","position":[43.64999,-79.391011]},{"name":"Pizzaiolo","position":[43.647986,-79.390102]}],"token":"pk.eyJ1IjoiemFuZGVyc2hhaCIsImEiOiJjajQ0bzViMmQxYWttMzJteno2bnF2Zjl6In0.RPzADhwMJ3nEyzF_-8lLKQ"};
      })
      .then((res) => this.setState({
        meals: res.meals,
        token: res.token
      }));
  }

  render = () => {
    if (this.state.token) {
      return (
        <div id='mapbox-div'>
          <Map center={position} zoom={17} style={{flexGrow: 1}} attributionControl={false}>
            <TileLayer url={darkUrl + this.state.token} attribution='' />
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