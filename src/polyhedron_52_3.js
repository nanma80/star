import React from 'react';
import App from './App';

class Polyhedron_52_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            The Great Stellated Dodecahedron is ...

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>great stellated dodecahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_north_pole_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>great stellated dodecahedron from the north pole</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_vertex_figure_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>vertex figure</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/exploded_GreatStellatedDodecahedron.gif')} alt = 'static'/>
            <figcaption>great stellated dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated dodecahedron</span>);
  }
}

export default Polyhedron_52_3;

