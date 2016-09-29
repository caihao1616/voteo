import React from 'react';
import Controls from './controls';
import Stats from './stats';
import Timer from './timer';

class Panel extends React.Component{
  render(){
    return (
      <div className='panel'>
        <Timer countdown={this.props.countdown}/>
        <Controls started={this.props.started}/>
        <Stats/>
      </div>
    )
  }
}

module.exports = Panel;