import React from 'react';
import App from './App';

class Polyhedron_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The great icosahedron is ...

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>great icosahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_north_pole_whole_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>great icosahedron from the north pole</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/exploded_GreatIcosahedron.gif')} alt = 'static'/>
            <figcaption>great icosahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great icosahedron </span>);
  }
}

export default Polyhedron_3_52;

