import React, { Component } from 'react';
import IconHoverable from '../components/IconHoverable';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaFileTextO } from 'react-icons/lib/fa';
import PDF from '../utils/resume.pdf';

const tight = {
  margin: 10,
  padding: 0,
  color: 'black'
}

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

const inline = {
  display: 'inline-block'
  // float: 'left'
}

class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', paddingTop: '10vh'}}> 
        <h1 style={{...tight, ...{fontSize: '5.5vh'}}}>Alexander Shah!</h1>
        <br />
        <br />
        <h3 style={{...tight, ...{fontSize: '2vh'}}}>
          2B Software Engineering
          <br />
          <br />
          @ University of Waterloo
        </h3>
        {/* <hr style={{...tight, ...{width: '10px', border: '1px solid #dd7d81', marginTop: '5px', marginBottom: '5px'}}}/> */}
        {/* <h3 style={{...tight, ...{fontSize: '2.25vh', marginBottom: '10px'}}}>University of Waterloo</h3> */}
        {/* <h3 style={{...tight, ...{fontSize: '1.5vh'}}}>
          GitHub
          Facebook
          LinkedIn
          Resume
        </h3> */}

        <ul style={{...tight, ...{
          position: 'fixed',
          bottom: '5px',
          width: '100%',
          color: 'black',
          listStyleType: 'none',
          overflow: 'hidden',
        }}}>
          <li style={inline}><IconHoverable link='https://www.github.com/zandershah'>Github</IconHoverable></li>
          {/* <li style={inline}>.</li> */}
          <li style={inline}><IconHoverable link='https://twitter.com/Zander_Shah'>Twitter</IconHoverable></li>
          {/* <li style={inline}>.</li> */}
          <li style={inline}><IconHoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'>LinkedIn</IconHoverable></li>
          {/* <li style={inline}>.</li> */}
          <li style={inline}><IconHoverable link='https://www.facebook.com/zander.shah'>Facebook</IconHoverable></li>
          {/* <li style={inline}>.</li> */}
          <li style={inline}><IconHoverable link={PDF}>Resume</IconHoverable></li>
          {/* <IconHoverable link='https://www.github.com/zandershah'><FaGithub size='42px' /></IconHoverable>
          <IconHoverable link='https://twitter.com/Zander_Shah'><FaTwitter size='42px' /></IconHoverable>
          <IconHoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'><FaLinkedin size='42px' /></IconHoverable>
          <IconHoverable link='https://www.facebook.com/zander.shah'><FaFacebook size='42px' /></IconHoverable>
          <IconHoverable link={PDF}><FaFileTextO size='42px' /></IconHoverable> */}
        </ul>
      </div>
    );
  }
}

export default App;
