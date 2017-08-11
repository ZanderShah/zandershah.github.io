import React, { Component } from 'react';
import IconHoverable from '../components/IconHoverable';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaFileTextO } from 'react-icons/lib/fa';
import PDF from '../resume.pdf';

const tight = {
  marginTop: '5px',
  marginBottom: '5px',
  padding: 0,
}

class Resume extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', paddingTop: '30vh'}}> 
        <h1 style={tight}>Alexander Shah</h1>
        <h3 style={tight}>Software Engineering</h3>
        <hr style={{...tight, ...{width: '10px', border: '1px solid indianred'}}}/>
        <h5 style={tight}>University of Waterloo</h5>

        <IconHoverable link='https://www.github.com/zandershah'><FaGithub size='42px' /></IconHoverable>
        <IconHoverable link='https://twitter.com/Zander_Shah'><FaTwitter size='42px' /></IconHoverable>
        <IconHoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'><FaLinkedin size='42px' /></IconHoverable>
        <IconHoverable link='https://www.facebook.com/zander.shah'><FaFacebook size='42px' /></IconHoverable>
        <IconHoverable link={PDF}><FaFileTextO size='42px' /></IconHoverable>
      </div>
    );
  }
}

export default Resume;
