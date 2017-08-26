import React, { Component } from 'react';
import SummonersWarCard from '../components/SummonersWarCard';

class SummonersWar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    // fetch('/api/summoners-war')
    //   .then((res) => res.json())
    //   .then((res) => this.setState({
    //     runs: res
    //   }));
    this.setState({
      runs: [{"id":495,"dungeon":"Giant's Keep B10","date":"2017-08-25T11:39:00.000Z","time":"1:59","team1":"Sigmarus","team2":"Hwa","team3":"Belladeon","team4":"Lushen","team5":"Megan"},{"id":481,"dungeon":"Hall of Magic B10","date":"2017-08-25T09:41:00.000Z","time":"1:18","team1":"Verdehile","team2":"Veromos","team3":"Belladeon","team4":"Megan","team5":"Sigmarus"},{"id":466,"dungeon":"Dragon's Lair B10","date":"2017-08-23T15:28:00.000Z","time":"2:30","team1":"Verdehile","team2":"Veromos","team3":"Megan","team4":"Belladeon","team5":"Sigmarus"},{"id":440,"dungeon":"Faimon Volcano Hell - 1","date":"2017-08-23T11:07:00.000Z","time":"1:17","team1":"Xiao Lin","team2":"Mihyang","team3":"Lisa","team4":null,"team5":null},{"id":304,"dungeon":"Tamor Desert Hell - 3","date":"2017-08-14T17:30:00.000Z","time":"1:13","team1":"Baretta","team2":"Vagabond (Wind)","team3":"Grim Reaper (Water)","team4":"Garuda (Fire)","team5":null},{"id":205,"dungeon":"Hall of Heroes","date":"2017-08-11T16:50:00.000Z","time":"3:00","team1":"Verdehile","team2":"Sigmarus","team3":"Veromos","team4":"Belladeon","team5":"Megan"},{"id":20,"dungeon":"Hall of Wind B7","date":"2017-08-10T10:02:00.000Z","time":"0:41","team1":"Hwa","team2":"Verdehile","team3":"Lushen","team4":"Veromos","team5":null},{"id":1,"dungeon":"Hall of Water B7","date":"2017-08-09T11:26:00.000Z","time":"1:05","team1":"Lushen","team2":"Belladeon","team3":"Bernard","team4":"Veromos","team5":"Megan"}]
    })
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
