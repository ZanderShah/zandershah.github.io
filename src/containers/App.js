import React, { Component } from 'react';
import Resume from '../containers/Resume';

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
      <Resume />
    );
  }
}

export default App;
