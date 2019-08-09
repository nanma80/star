import React from 'react';
import App from './App';

class Polyhedron_5_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The regular dodecahedron is ...

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>regular dodecahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_north_pole_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>regular dodecahedron from the north pole</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Dodecahedron </span>);
  }
}

export default Polyhedron_5_3;

