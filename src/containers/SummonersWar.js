import React, { Component } from 'react';

class SummonersWar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetch('/api/summoners-war')
      .then((res) => res.json())
      .then((res) => this.setState({
        runs: res
      }));
  }

  render = () => {
    if (this.state.runs) {
      return (
        <div style={{textAlign: 'center'}}>
          <h1>In Progress</h1>
          {this.state.runs.map((row) => 
            <h5>{row['name']}</h5> 
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SummonersWar;
