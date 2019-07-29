import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './index.css';
import Welcome from './welcome';
import Page1 from './page1';


ReactDOM.render(
  <BrowserRouter>
     <Switch>
        <Route exact path='/index.html' component={Welcome} />
        <Route exact path='/' component={Welcome} />
        <Route path='/page1' component={Page1} />
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);