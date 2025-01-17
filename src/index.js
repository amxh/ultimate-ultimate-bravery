import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UltimateBravery from './UltimateBravery';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router basename="#">
      <Route exact path="/" component={App} />
      <Route path="/minecraft-is-better-than-fortnite" component={UltimateBravery} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
