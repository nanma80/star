import React from 'react';
import App from './App';

class Polyhedron_52_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		<span>
            The Great Stellated Dodecahedron is ...
            </span>
            <div>
            <img src = {require('./images/polyhedron_52_3/povGreatStellatedDodecahedron.png')} alt = 'static'/>
            <img src = {require('./images/polyhedron_52_3/povGreatStellatedDodecahedron.png')} alt = 'static'/>
            </div>
            <div>
            <img src = {require('./images/polyhedron_52_3/explodeGreatStellatedDodecahedron.gif')} alt = 'animation'/>
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated dodecahedron</span>);
  }
}

export default Polyhedron_52_3;

