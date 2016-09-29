import React from 'react';
import boardActions from '../board_actions';

class Panel extends React.Component{
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
        <button type="button" className="panel_btn" onClick={this.handleRestart}>{this.props.started ? 'Restart' : 'Start'}</button>
      </div>
    )
  }
}

module.exports = Panel;