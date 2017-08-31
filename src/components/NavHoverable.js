import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavHoverable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  style = () => {
    if (this.state.hovered) {
      return {
        color: '#dd7d81'
      }
    } else {
      return {}
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
      <NavLink to={this.props.to} style={this.props.style} exact activeStyle={{color: '#dd7d81'}} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}> 
        <span style={this.style()}>{this.props.children}</span>
      </NavLink>
    );
  }
}

export default NavHoverable;