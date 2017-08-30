import React, { Component } from 'react';

const divs = {
  // border: '1px solid black',
  margin: '10px',
  textAlign: 'left',
}

const imgs = {
  height: '104px',
  width: '104px',
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
        <h3 style={{marginBottom: '5px'}}>{this.props.run.dungeon} <span style={{color: 'indianred'}}>=></span> {this.props.run.time}</h3>
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
  