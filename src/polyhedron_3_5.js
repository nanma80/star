import React from 'react';
import App from './App';

class Polyhedron_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
        <div>
        The regular icosahedron is another one of the five regular convex 
        polyhedra (<a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>).
        There are 20 faces, each of which is a regular, equilateral triangle. 
        </div>

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

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_vertex_figure_Icosahedron.png')} alt = 'static'/>
            <figcaption>vertex figure</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Icosahedron </span>);
  }
}

export default Polyhedron_3_5;

