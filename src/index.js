import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './index.css';
import Welcome from './welcome';
import Page1 from './page1';


ReactDOM.render(
  <BrowserRouter>
     <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/index.html'} component={Welcome} />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Welcome} />
        <Route path={process.env.PUBLIC_URL + '/page1'} component={Page1} />
     </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);