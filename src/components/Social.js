import React, { Component } from 'react';
import Hoverable from './Hoverable';
import Section from './Section';
import {FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaFile} from 'react-icons/lib/fa';

class Social extends Component {
  render() {
    return (
      <Section>
        <Hoverable link='https://www.github.com/zandershah'><FaGithub size='42px' /></Hoverable>
        <Hoverable link='https://twitter.com/Zander_Shah'><FaTwitter size='42px' /></Hoverable>
        <Hoverable link='https://www.linkedin.com/in/alexander-shah-a8379aa5/'><FaLinkedin size='42px' /></Hoverable>
        <Hoverable link='https://www.facebook.com/zander.shah'><FaFacebook size='42px' /></Hoverable>
      </Section >
    );
  }
}

export default Social;