import React from 'react';

class Timer extends React.Component{
  render(){
    return (
      <div className='timer'>
        {this.props.countdown}
      </div>
    )
  }
}

module.exports = Timer;