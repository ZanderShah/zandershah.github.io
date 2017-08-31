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
    // this.setState({
    //   runs: [{"id":498,"dungeon":"Dragon's Lair B10","date":"2017-08-30T16:24:00.000Z","time":"2:55","team1":"vampire_fire_awakened","team2":"ifrit_dark_awakened","team3":"mystic_witch_water_awakened","team4":"inugami_light_awakened","team5":"phoenix_water_awakened"},{"id":494,"dungeon":"Giant's Keep B10","date":"2017-08-25T11:39:00.000Z","time":"1:59","team1":"phoenix_water_awakened","team2":"rakshasa_fire_awakened","team3":"inugami_light_awakened","team4":"joker_wind_awakened","team5":"mystic_witch_water_awakened"},{"id":480,"dungeon":"Hall of Magic B10","date":"2017-08-25T09:41:00.000Z","time":"1:18","team1":"vampire_fire_awakened","team2":"ifrit_dark_awakened","team3":"inugami_light_awakened","team4":"mystic_witch_water_awakened","team5":"phoenix_water_awakened"},{"id":304,"dungeon":"Tamor Desert Hell - 3","date":"2017-08-14T17:30:00.000Z","time":"1:13","team1":"sylph_fire_awakened","team2":"vagabond_wind","team3":"grim_reaper_water","team4":"garuda_fire","team5":null},{"id":220,"dungeon":"Faimon Volcano Hell - 1","date":"2017-08-14T13:37:00.000Z","time":"1:14","team1":"sylph_fire_awakened","team2":"vagabond_wind","team3":null,"team4":null,"team5":null},{"id":205,"dungeon":"Hall of Heroes","date":"2017-08-11T16:50:00.000Z","time":"3:00","team1":"vampire_fire_awakened","team2":"phoenix_water_awakened","team3":"ifrit_dark_awakened","team4":"inugami_light_awakened","team5":"mystic_witch_water_awakened"},{"id":20,"dungeon":"Hall of Wind B7","date":"2017-08-10T10:02:00.000Z","time":"0:41","team1":"rakshasa_fire_awakened","team2":"vampire_fire_awakened","team3":"joker_wind_awakened","team4":"ifrit_dark_awakened","team5":null},{"id":1,"dungeon":"Hall of Water B7","date":"2017-08-09T11:26:00.000Z","time":"1:05","team1":"joker_wind_awakened","team2":"inugami_light_awakened","team3":"griffon_wind_awakened","team4":"ifrit_dark_awakened","team5":"mystic_witch_water_awakened"}]
    // })
  }

  render = () => {
    if (this.state.runs) {
      return (
        <div>
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
