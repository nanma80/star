import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom'; 
import './index.css';
import Welcome from './welcome';
import Pentagram from './pentagram';
import Heptagram from './heptagram';
import Hexagram from './hexagram';

import Intro3D from './intro_3d';
import Polyhedron_3_5 from './polyhedron_3_5';
import Polyhedron_3_52 from './polyhedron_3_52';
import Polyhedron_52_3 from './polyhedron_52_3';
import Polyhedron_52_5 from './polyhedron_52_5';
import Polyhedron_5_3 from './polyhedron_5_3';
import Polyhedron_5_52 from './polyhedron_5_52';
import Summary3D from './summary_3d';

import Intro4D from './intro_4d';
import Polytope_5_3_3 from './polytope_5_3_3';
import Polytope_3_3_5 from './polytope_3_3_5';
import Polytope_3_5_52 from './polytope_3_5_52';
import Polytope_52_5_3 from './polytope_52_5_3';
import Polytope_5_52_5 from './polytope_5_52_5';
import Polytope_5_3_52 from './polytope_5_3_52';
import Polytope_52_3_5 from './polytope_52_3_5';
import Polytope_52_5_52 from './polytope_52_5_52';
import Polytope_5_52_3 from './polytope_5_52_3';
import Polytope_3_52_5 from './polytope_3_52_5';
import Polytope_3_3_52 from './polytope_3_3_52';
import Polytope_52_3_3 from './polytope_52_3_3';
import Summary4D from './summary_4d';

ReactDOM.render(
  <HashRouter basename='/'>
     <Switch>
        <Route exact path='/index.html' component={Welcome} />
        <Route exact path='/' component={Welcome} />
        <Route path='/pentagram' component={Pentagram} />
        <Route path='/heptagram' component={Heptagram} />
        <Route path='/hexagram' component={Hexagram} />
        <Route path='/intro_3d' component={Intro3D} />
        <Route path='/polyhedron_3_5' component={Polyhedron_3_5} />
        <Route path='/polyhedron_3_52' component={Polyhedron_3_52} />
        <Route path='/polyhedron_52_3' component={Polyhedron_52_3} />
        <Route path='/polyhedron_52_5' component={Polyhedron_52_5} />
        <Route path='/polyhedron_5_3' component={Polyhedron_5_3} />
        <Route path='/polyhedron_5_52' component={Polyhedron_5_52} />
        <Route path='/summary_3d' component={Summary3D} />
        <Route path='/intro_4d' component={Intro4D} />
        <Route path='/polytope_5_3_3' component={Polytope_5_3_3} />
        <Route path='/polytope_3_3_5' component={Polytope_3_3_5} />
        <Route path='/polytope_3_5_52' component={Polytope_3_5_52} />
        <Route path='/polytope_52_5_3' component={Polytope_52_5_3} />
        <Route path='/polytope_5_52_5' component={Polytope_5_52_5} />
        <Route path='/polytope_5_3_52' component={Polytope_5_3_52} />
        <Route path='/polytope_52_3_5' component={Polytope_52_3_5} />
        <Route path='/polytope_52_5_52' component={Polytope_52_5_52} />
        <Route path='/polytope_5_52_3' component={Polytope_5_52_3} />
        <Route path='/polytope_3_52_5' component={Polytope_3_52_5} />
        <Route path='/polytope_3_3_52' component={Polytope_3_3_52} />
        <Route path='/polytope_52_3_3' component={Polytope_52_3_3} />
        <Route path='/summary_4d' component={Summary4D} />
     </Switch>
  </HashRouter>,
  document.getElementById('root')
);