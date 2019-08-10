import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The small stellated dodecahedron is one of the four regular
            star polyhedra in 3D. The Schläfli symbol is 
        {'{'}5/2, 5{'}'} because each face is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>), and each
        vertex figure is a pentagon. This means five faces meet at each vertex.
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Small stellated dodecahedron</figcaption>
        </figure>
        </div>


        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_north_pole_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Projection centered at the north pole</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_vertex_figure_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure</figcaption>
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

