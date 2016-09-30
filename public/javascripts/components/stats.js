import React from 'react';

class Stats extends React.Component{
  render(){
    let popular_point = 'N/A';
    let popular_point_times = 0;
    if(this.props.all_voted){
      let point_stat = {}
      for(let user in this.props.users){
        if(point_stat[this.props.users[user].point]){
          point_stat[this.props.users[user].point] += 1;
        }
        else{
          point_stat[this.props.users[user].point] = 1;
        }
      }
      for(let point in point_stat){
        if(point_stat[point] > popular_point_times && point != -1){
          popular_point = point;
          popular_point_times = point_stat[point];
        }
      }
    }

    return (
      <div className='stats'>
        <div className='stats_title'>
          MOST VOTED:
        </div>
        <div className={this.props.all_voted || 'hidden'}>
          <div className='stats_result'>
            {popular_point}
          </div>
          <div className='stats_unit'>
            STORY POINTS
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Stats;