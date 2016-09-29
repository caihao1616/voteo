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

    let card_classes = ['cards']
    if(!this.props.started){
      card_classes.push('hidden')
    }

    return (
      <div className={card_classes.join(' ')}>{cards}</div>
    );
  }
}

module.exports = Cards;