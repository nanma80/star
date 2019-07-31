import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom'; 
import './index.css';
import Welcome from './welcome';
import Page1 from './page1';
import Pentagram from './pentagram';
import Polyhedron_3_5 from './polyhedron_3_5';
import Polyhedron_3_52 from './polyhedron_3_52';
import Polyhedron_52_3 from './polyhedron_52_3';
import Polyhedron_52_5 from './polyhedron_52_5';
import Polyhedron_5_3 from './polyhedron_5_3';
import Polyhedron_5_52 from './polyhedron_5_52';

ReactDOM.render(
  <HashRouter basename='/'>
     <Switch>
        <Route exact path='/index.html' component={Welcome} />
        <Route exact path='/' component={Welcome} />
        <Route path='/page1' component={Page1} />
        <Route path='/pentagram' component={Pentagram} />
        <Route path='/polyhedron_3_5' component={Polyhedron_3_5} />
        <Route path='/polyhedron_3_52' component={Polyhedron_3_52} />
        <Route path='/polyhedron_52_3' component={Polyhedron_52_3} />
        <Route path='/polyhedron_52_5' component={Polyhedron_52_5} />
        <Route path='/polyhedron_5_3' component={Polyhedron_5_3} />
        <Route path='/polyhedron_5_52' component={Polyhedron_5_52} />
     </Switch>
  </HashRouter>,
  document.getElementById('root')
);