import React from 'react';
import Controls from './controls';
import Stats from './stats';

class Panel extends React.Component{
  render(){
    return (
      <div className='panel'>
        <Controls/>
        <Stats/>
      </div>
    )
  }
}

module.exports = Panel;