import React from 'react';
import App from './App';

class Polyhedron_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The regular icosahedron is ...

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption>regular icosahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_north_pole_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption>regular icosahedron from the north pole</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Icosahedron </span>);
  }
}

export default Polyhedron_3_5;

