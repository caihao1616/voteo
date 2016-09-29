import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import boardActions from './board_actions';
import boardStore from './board_store';
import Board from './components/board';

$(document).ready(function(){
  ReactDOM.render(
    <Board />,
    document.getElementById('content')
  );
});