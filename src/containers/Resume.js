import React, { Component } from 'react';
import IconHoverable from '../components/IconHoverable';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaFileTextO } from 'react-icons/lib/fa';
import PDF from '../utils/resume.pdf';

const tight = {
  marginTop: 0,
  marginBottom: 0,
  padding: 0,
  color: 'white'
}

class Resume extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', paddingTop: '30vh'}}> 
        <h1 style={{...tight, ...{fontSize: '5.5vh'}}}>Alexander Shah</h1>
        <h3 style={{...tight, ...{fontSize: '2.25vh'}}}>2B Software Engineering</h3>
        <hr style={{...tight, ...{width: '10px', border: '1px solid #dd7d81', marginTop: '5px', marginBottom: '5px'}}}/>
        <h5 style={{...tight, ...{fontSize: '2.25vh', marginBottom: '10px'}}}>University of Waterloo</h5>

        <div>
          <IconHoverable link='https://www.github.com/zandershah'><FaGithub size='42px' /></IconHoverable>
          <IconHoverable link='https://twitter.com/Zander_Shah'><FaTwitter size='42px' /></IconHoverable>
          <IconHoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'><FaLinkedin size='42px' /></IconHoverable>
          <IconHoverable link='https://www.facebook.com/zander.shah'><FaFacebook size='42px' /></IconHoverable>
          <IconHoverable link={PDF}><FaFileTextO size='42px' /></IconHoverable>
        </div>
      </div>
    );
  }
}

export default Resume;
