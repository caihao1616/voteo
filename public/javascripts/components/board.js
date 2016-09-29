import React from 'react';
import boardStore from '../board_store';
import boardActions from '../board_actions';
import Dialog from './dialog';
import Users from './users';
import Panel from './panel';
import Cards from './cards';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = boardStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    boardStore.listen(this.onChange);
    boardActions.registerUser();
  }

  componentWillUnmount(){
    boardStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
    console.log(state)
  }

  render(){
    let current_user = this.state.users[this.state.user_name];
    let voted_point = current_user ? current_user.point : null;
    let all_voted = Object.keys(this.state.users).reduce((prev, user_name) =>
      prev && (this.state.users[user_name].point !== null)
    , true);

    return (
      <div className='board'>
        <Dialog message={this.state.dialog_message} />
        <Panel all_voted={all_voted} started={this.state.started} countdown={this.state.countdown} />
        <div className='main_panel'>
          <Users users={this.state.users} user_name={this.state.user_name} all_voted={all_voted} />
          <Cards voted={voted_point} started={this.state.started} />
        </div>
      </div>
    );
  }
}

module.exports = Board;