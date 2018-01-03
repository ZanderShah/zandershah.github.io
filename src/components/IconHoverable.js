import React, { Component } from 'react';

class IconHoverable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  style = () => {
    return {
      textDecoration: 'none',
      borderTop: this.state.hovered ? '2px solid black' : '2px solid transparent',
      borderBottom: this.state.hovered ? '2px solid black' : '2px solid transparent',
      color: '#181818',
      padding: '5px',
      margin: '5px',
      display: 'block',
    }
  }

  onMouseOver = () => {
    this.setState({
      hovered: true 
    });
  }

  onMouseOut = () => {
    this.setState({
      hovered: false
    });
  }

  render = () => {
    return (
      <a href={this.props.link} className={this.props.className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={{textDecoration: 'none'}}> 
        <span style={this.style()}>{this.props.children}</span>
      </a>
    );
  }
}

export default IconHoverable;