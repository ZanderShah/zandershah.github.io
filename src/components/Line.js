import React, { Component } from 'react';

class Line extends Component {
  render() {
    const styles = {
        display: 'block',
        height: '1px',
        border: '0',
        borderTop: '1px solid black',
        margin: '0',
        marginLeft: '45vw',
        marginRight: '45vw',
        padding: '0'
    }

    return (
        <hr style={styles} />
    );
  }
}

export default Line;