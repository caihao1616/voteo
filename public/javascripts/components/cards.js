import React from 'react';
import boardActions from '../board_actions';
import CONSTANTS from '../constants';

class Cards extends React.Component{
  handleVote(point){
    boardActions.vote(point);
  }

  render(){
    let cards = CONSTANTS.POINTS
    .filter((point) =>
      point !== this.props.voted
    )
    .map((point) =>
      <div key={point} className='card' onClick={() => this.handleVote(point)}>{point}</div>
    );

    return (
      <div className='cards'>{cards}</div>
    );
  }
}

module.exports = Cards;