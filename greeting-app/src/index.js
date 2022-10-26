import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// let inp = prompt('Enter your name');
let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = '';
if (currentDate >= 1 && currentDate < 12) {
  greeting = 'Good Morning';
} else if (currentDate >= 12 && currentDate < 19) {
  greeting = 'good AfterNoon';
} else {
  greeting = 'good Evening';
}

ReactDOM.render(
  <div>
  <h1>
    Hello  {greeting}
  </h1>,
  </div>,

  document.getElementById('root')
);
