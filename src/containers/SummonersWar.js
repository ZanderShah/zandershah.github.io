import React, { Component } from 'react';
import SummonersWarCard from '../components/SummonersWarCard';

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
          <h1>Recent Runs</h1>
          {this.state.runs.map((row) => 
            <SummonersWarCard run={row} />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SummonersWar;
