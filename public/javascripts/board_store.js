import alt from './alt';
import io from 'socket.io-client';
import Constants from './constants';
import boardActions from './board_actions';

var socket = io();

class BoardStore{
  constructor(){
    this.users = {};
    this.started = false;
    this.dialog_message = null;

    this.bindListeners({
      handleRegisterUser: boardActions.REGISTER_USER,
      handleVote: boardActions.VOTE,
      handleRestart: boardActions.RESTART,
      handleSubmitName: boardActions.SUBMIT_NAME
    });

    this._listenEvents();
  }

  handleRegisterUser(){
    this.register_generator = this._registerUser();
    this.register_generator.next();
    return false;
  }

  handleVote(point){
    socket.emit('vote', point);
    return false;
  }

  handleRestart(){
    socket.emit('restart');
    return false;
  }

  handleSubmitName(name){
    this._dialog(null);
    this.register_generator.next(name);
    return false;
  }

  output(state){
    return {
      users: state.users,
      user_name: state.user_name,
      started: state.started,
      dialog_message: state.dialog_message
    }
  }

  //////////////////
  // private methods

  _listenEvents(){
    socket.on('update', (data) => {
      this.setState(data);
      this.emitChange();
    });

    socket.on('disconnect', () => {
      alert('You have been disconnected')
      location.href = 'http://www.spokeo.com'
    });
  }

  _dialog(code, data){
    let message = null;
    switch(code){
      case 'NEW_NAME':
        message = Constants.DIALOG_MESSAGES.NEW_NAME;
        break;
      case 'EXISTING_NAME':
        message = Constants.DIALOG_MESSAGES.EXISTING_NAME.replace('_', data.existed_name);
        break;
    }
    this.setState({dialog_message: message});
    this.emitChange();
  }

  * _registerUser(){
    let query = this._getQuery();
    let user_name = query['name'];

    while(!user_name){
      this._dialog('NEW_NAME');
      user_name = yield;
    }

    let success = false;
    while(!success){
      this._register(user_name);
      success = yield;
      if(!success){
        this._dialog('EXISTING_NAME', {existed_name: user_name});
        user_name = yield
      }
    }

    this.setState({user_name: user_name});
    this.emitChange();

    if(query['name'] !== user_name){
      let url = `${location.protocol}//${location.host}${location.pathname}`;
      window.history.replaceState({}, '', `${url}?name=${user_name}`);
    }
  }

  _register(user_name){
    socket.emit('register', user_name, (success) => {
      this.register_generator.next(success);
    });
  }

  _getQuery(){
    let query = {};
    let query_str = window.location.search.substring(1);
    let pairs = query_str.split("&");
    for (let i in pairs) {
      let pair = pairs[i].split("=");
      query[pair[0]] = decodeURIComponent(pair[1]);
    }
    return query;
  }
}

module.exports = alt.createStore(BoardStore, 'BoardStore');