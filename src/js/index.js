import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['The Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['The Sun', 27.9]
];

ReactDOM.render(<App planets = {planets}/>, document.getElementById('app'));