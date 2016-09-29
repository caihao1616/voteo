import React from 'react';
import boardActions from '../board_actions';

class Panel extends React.Component{
  handleDone(e){
    boardActions.disclose();
  }

  handleRestart(e){
    boardActions.restart();
  }

  handleQuitVote(e){
    boardActions.vote(-1);
  }

  render(){
    return (
      <div className='panel'>
        <button type="button" className="panel_btn" onClick={this.handleQuitVote}>Quit Vote</button>
        <button type="button" className="panel_btn" onClick={this.handleRestart}>Restart</button>
        <button type="button" className="panel_btn" disabled={!this.props.all_voted} onClick={this.handleDone}>Done</button>
      </div>
    )
  }
}

module.exports = Panel;