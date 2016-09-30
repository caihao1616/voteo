import React from 'react';

class User extends React.Component{
  render() {
    let card_classes = ['user_card'];
    if(this.props.point !== null){
      if(this.props.point === -1)
        card_classes.push('quitted');
      else if(!this.props.is_me && !this.props.all_voted)
        card_classes.push('back');
    }
    else{
      card_classes.push('not_voted');
    }

    let user_classes = ['user']
    if(this.props.is_me)
      user_classes.push('is_me');

    let point = null
    if((this.props.all_voted || this.props.is_me) && this.props.point !== -1)
      point = this.props.point

    return (
      <div className={user_classes.join(' ')}>
        <div className={card_classes.join(' ')}>
          { point }
        </div>
        <div className='user_name'>{this.props.name}</div>
      </div>
    );
  }
}

class Users extends React.Component{
  render() {
    let users = []
    for(let key in this.props.users){
      users.push(
        <User
          key={users.length}
          name={key}
          point={this.props.users[key].point}
          is_me={key === this.props.user_name}
          all_voted={this.props.all_voted}
        />
      )
    }

    return (
      <div className='users'>
        {users}
      </div>
    );
  }
}

module.exports = Users;