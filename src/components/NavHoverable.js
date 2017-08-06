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
        backgroundColor: '#333'
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
      <NavLink to={this.props.to} style={{...this.props.style, ...this.style()}} exact activeStyle={{color: 'indianred'}} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}> 
        {this.props.children}
      </NavLink>
    );
  }
}

export default NavHoverable;