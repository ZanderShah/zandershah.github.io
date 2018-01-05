import React, { Component } from 'react';
import IconHoverable from '../components/IconHoverable';
import PDF from '../utils/resume.pdf';

const tight = {
  margin: 10,
  padding: 0,
  color: '#181818'
}

const uls = {
  position: 'fixed',
  bottom: '5px',
  width: '100%',
  listStyleType: 'none',
  overflow: 'hidden',
}

const inline = {
  display: 'inline-block'
  // float: 'left'
}

class App extends Component {
  render() {
    let title = null;
    let subTitle = null;
    let footer = null;

    if (this.props.small) {
      title = {
        fontSize: '38px',
      };
      subTitle = {
        fontSize: '14px',
      };
      footer = {
        fontSize: '12px',
      };
    } else {
      title = {
        fontSize: '60px',
      };
      subTitle = {
        fontSize: '28px'
      };
      footer = {
        fontSize: '20px'
      };
    }

    return (
      <div style={{textAlign: 'center', paddingTop: '10vh'}}> 
        <h1 style={{...tight, ...title}}>Alexander Shah!</h1>
        <br />
        <br />
        <h3 style={{...tight, ...subTitle}}>
          2B Software Engineering
          <br />
          <br />
          @ University of Waterloo
        </h3>

        <ul style={{...tight, ...uls, ...footer}}>
          <li style={inline}><IconHoverable link='https://www.github.com/zandershah'>Github</IconHoverable></li>
          <li style={inline}><IconHoverable link='https://twitter.com/Zander_Shah'>Twitter</IconHoverable></li>
          <li style={inline}><IconHoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'>LinkedIn</IconHoverable></li>
          <li style={inline}><IconHoverable link='https://www.facebook.com/zander.shah'>Facebook</IconHoverable></li>
          <li style={inline}><IconHoverable link={PDF}>Resume</IconHoverable></li>
        </ul>
      </div>
    );
  }
}

export default App;
