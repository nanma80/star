import React from 'react';
import App from './App';

class Polyhedron_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The Great Dodecahedron is ...
            

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>great dodecahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_north_pole_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>great dodecahedron from the north pole</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_vertex_figure_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>vertex figure</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/exploded_GreatDodecahedron.gif')} alt = 'static'/>
            <figcaption>great dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great dodecahedron </span>);
  }
}

export default Polyhedron_5_52;

