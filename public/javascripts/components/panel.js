import React from 'react';
import Controls from './controls';
import Stats from './stats';
import Timer from './timer';

class Panel extends React.Component{
  render(){
    return (
      <div className='panel'>
        <h1 className='title'>VOTEO</h1>
        <Timer countdown={this.props.countdown} />
        <Controls started={this.props.started} />
        <Stats users={this.props.users} all_voted={this.props.all_voted} />
      </div>
    )
  }
}

module.exports = Panel;