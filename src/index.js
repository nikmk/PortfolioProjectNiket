import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import "./assets/css/blk-design-system-react.css"
import LandingPage from './views/LandingPage';

ReactDOM.render(
    <BrowserRouter >
    <Switch>

       <Route
        path="/"
        render={props => <LandingPage {...props} />}
      />
      <Redirect from="/home" to="/" />
      <Redirect from="/profile" to="/" />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
