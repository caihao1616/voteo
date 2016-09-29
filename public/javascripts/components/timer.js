import React from 'react';

class Timer extends React.Component{
  render(){
    return (
      <div className='timer'>
        <span className='timer_sec'>{this.props.countdown}</span>s
        <div className='timer_underline'></div>
      </div>
    )
  }
}

module.exports = Timer;