import React, { Component } from 'react';

class SummonersWarCard extends Component {
render = () => {
    const run = this.props.run;
    return (
      <div style={{border: '1px solid black', margin: '10px'}}>
        <h3>{run.dungeon} => {run.time}</h3>
        <h5>{run.team1} {run.team2} {run.team3} {run.team4} {run.team5}</h5>
      </div>
    )
  }
}

export default SummonersWarCard;
  