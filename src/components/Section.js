import React, { Component } from 'react';

class Section extends Component {

  render() {
    const styles = {
      height: `${this.props.height}`,
      color: 'black',
      textAlign: 'center',
    }

    return (
      <section style={{...styles, ...this.props.style}} id={this.props.id} className={this.props.className}> 
          {this.props.children}
      </section>
    );
  }
}

export default Section;