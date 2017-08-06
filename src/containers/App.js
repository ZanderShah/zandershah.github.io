import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Food from '../containers/Food';
import Resume from '../containers/Resume';
import NavHoverable from '../components/NavHoverable';

class App extends Component {
  render() {
    const uls = {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
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

    return (
      <div>
        <nav>
          <ul style={uls}>
            <li style={{float: 'left'}}>
              <NavHoverable to='/' style={tabs} exact activeStyle={{color: 'indianred'}}>Home</NavHoverable>
            </li>
            {/* <li style={{float: 'left'}}>
              <NavHoverable to='/food' style={tabs} activeStyle={{color: 'indianred'}}>Food</NavHoverable>
            </li> */}
          </ul>
        </nav>
        <div>
          <Route exact path='/' component={Resume} />
          <Route path='/food' component={Food} />
        </div>
      </div>
    );
  }
}

export default App;
