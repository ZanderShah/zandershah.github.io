import React, { Component } from 'react';
import Section from './Section';

class Intro extends Component {
  render() {
    const styles = {
      margin: 0,
      textAlign: 'center',
    }

    return (
      <Section id='intro' style={{paddingTop: '35vh'}}>
        <h1 style={styles}>Alexander </h1><h1 styles={{...styles, ...{color: 'darkvioletred'}}}>Shah</h1>
        <h3 style={styles}>Software Engineering | University of Waterloo</h3>
      </Section >
    );
  }
}

export default Intro;