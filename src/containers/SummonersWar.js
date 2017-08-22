import React, { Component } from 'react';

class SummonersWar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
            <h5>{row['dungeon']} {row['time']} {row['team1']} {row['team2']} {row['team3']} {row['team4']} {row['team5']}</h5> 
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SummonersWar;
