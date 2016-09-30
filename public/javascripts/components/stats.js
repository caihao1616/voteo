import React from 'react';

class Stats extends React.Component{
  render(){
    return (
      <div className='stats'>
        <div className='stats_title'>
          POPULAR RESULTS:
        </div>
        <div className='stats_result'>
          2
        </div>
        <div className='stats_unit'>
          STORY POINTS
        </div>
      </div>
    )
  }
}

module.exports = Stats;