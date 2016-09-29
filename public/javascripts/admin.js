import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './components/admin';

$(document).ready(function(){
  ReactDOM.render(
    <Admin />,
    document.getElementById('content')
  );
});