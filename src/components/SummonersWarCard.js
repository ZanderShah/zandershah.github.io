import React, { Component } from 'react';

const divs = {
  border: '1px solid black',
  margin: '10px',
  textAlign: 'center',
}

const imgs = {
  height: '100px',
  width: '100px',
  margin: '10px',
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
        <h1>{this.props.run.dungeon} => {this.props.run.time}</h1>
        {this.state.team.map((monster) => {
          if (monster) {
            return (
              <img src={`http://summonerswar.zenira.com/common/images/monsters/icons/${monster}.png`} alt={monster} style={imgs} />
            )
          }
        })}
      </div>
    )
  }
}

export default SummonersWarCard;
  