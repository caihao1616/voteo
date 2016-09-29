import React from 'react';
import boardActions from '../board_actions';

class Controls extends React.Component{
  handleRestart(e){
    boardActions.restart();
  }

  handleQuitVote(e){
    boardActions.vote(-1);
  }

  render(){
    return (
      <div className='controls'>
        <button type="button" className="controls_btn controls_btn_green" onClick={this.handleRestart}>{this.props.started ? 'Restart' : 'Start'}</button>
        <button type="button" className="controls_btn controls_btn_blue" onClick={this.handleQuitVote}>NO ACTION</button>
      </div>
    )
  }
}

module.exports = Controls;