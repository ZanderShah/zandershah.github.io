import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SummonersWar from '../containers/SummonersWar';
import Food from '../containers/Food';
import Resume from '../containers/Resume';
import NavHoverable from '../components/NavHoverable';

const uls = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: '#222', 
}

const tabs = {
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  padding: '10px',
  color: 'white',
}

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul style={uls}>
            <li style={{float: 'left'}}>
              <NavHoverable to='/' style={tabs}>Home</NavHoverable>
            </li>
            <li style={{float: 'left'}}>
              <NavHoverable to='/food-map' style={tabs}>Food Map</NavHoverable>
            </li> 
            <li style={{float: 'left'}}>
              <NavHoverable to='/summoners-war' style={tabs}>Summoners War</NavHoverable>
            </li>
          </ul>
        </nav>
        <Route exact path='/' component={Resume} />
        <Route path='/summoners-war' component={SummonersWar} />
        <Route path='/food-map' component={Food} />
      </div>
    );
  }
}

export default App;
