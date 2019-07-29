import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Page1 from './page1';

ReactDOM.render(
  <BrowserRouter>
     <Switch>
        <Route exact path='/index.html' component={App} />
        <Route exact path='/' component={App} />
        <Route path='/page1' component={Page1} />
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);