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
        <div className='panel_button_container'>
          <button type="button" className="panel_btn" onClick={this.handleQuitVote}>Quit Vote</button>
        </div>
        <div className='panel_button_container'>
          <button type="button" className="panel_btn" onClick={this.handleRestart}>{this.props.started ? 'Restart' : 'Start'}</button>
        </div>
      </div>
    )
  }
}

module.exports = Controls;