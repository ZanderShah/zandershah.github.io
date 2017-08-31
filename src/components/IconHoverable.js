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
      color: this.state.hovered ? '#dd7d81' : 'black',
      padding: '5px',
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
      <a href={this.props.link} className={this.props.className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}> 
        <span style={this.style()}>{this.props.children}</span>
      </a>
    );
  }
}

export default IconHoverable;