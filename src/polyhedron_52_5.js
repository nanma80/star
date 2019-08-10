import React from 'react';
import App from './App';

class Polyhedron_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The Small Stellated Dodecahedron is ...
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>small stellated dodecahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_north_pole_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>small stellated dodecahedron from the north pole</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_vertex_figure_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>vertex figure</figcaption>
        </figure>
        </div>


        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/exploded_SmallStellatedDodecahedron.gif')} alt = 'static'/>
            <figcaption>small stellated dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Small stellated dodecahedron</span>);
  }
}

export default Polyhedron_52_5;

