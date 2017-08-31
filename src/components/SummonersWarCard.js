import React, { Component } from 'react';

const divs = {
  // border: '1px solid indianred',
  margin: '10px',
  textAlign: 'left',
  display: 'inline-block',
}

const imgs = {
  height: '104px',
  width: '104px',
  margin: '5px',
}

class SummonersWarCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [props.run.team1, props.run.team2, props.run.team3, props.run.team4, props.run.team5]
    }
  }

  render = () => {
    return (
      <div style={divs}>
        <h2 style={{margin: '5px'}}>{this.props.run.dungeon} <span style={{color: 'indianred'}}>=></span> {this.props.run.time}</h2>
        {this.state.team.map((monster) =>
          <img src={monster ? `http://summonerswar.zenira.com/common/images/monsters/icons/${monster}.png`: 'https://puu.sh/xnE6a/bca4a9f7d4.png'} alt={monster} style={imgs} />
        )}
      </div>
    )
  }
}

export default SummonersWarCard;
  