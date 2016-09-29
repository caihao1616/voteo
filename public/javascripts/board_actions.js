import alt from './alt';

import Constants from './constants';class BoardActions{
  registerUser(){
    return true;
  }

  vote(point){
    return point;
  }

  disclose(){
    return true;
  }

  restart(){
    return true;
  }

  submitName(name){
    return name;
  }
}

module.exports = alt.createActions(BoardActions);