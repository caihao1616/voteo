import React from 'react';
import io from 'socket.io-client';

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.socket = io();
    this.state = {users: []}
  }

  componentDidMount(){
    this.socket.emit('admin_register');
    this.socket.on('update', (data) => {
      this.setState(data);
    });
  }

  kick(user_name){
    this.socket.emit('admin_kick', user_name, (success) => {
      if(!success)
        alert('You have no permission!');
    });
  }

  render(){
    let users = [];
    for(let key in this.state.users){
      users.push(
        <div className='admin_user' key={users.length}>
          {key}
          <button className='admin_kick_btn' onClick={() => this.kick(key)}>Kick</button>
        </div>
      );
    }

    return (
      <div className='admin'>
        {users}
      </div>
    );
  }
}

module.exports = Admin;