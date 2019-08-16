import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
        <div>
            The great icosahedron is one of the four regular
            star polyhedra, known as <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
             The Schläfli symbol is {'{'}3, 5/2{'}'}. 
             Each face is a {'{'}3{'}'} (triangle). Each
        vertex figure is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>). 
        There are 20 faces and 12 vertices.
           The dual polyhedra is {'{'}5/2, 3{'}'}, aka <Link to='/Polyhedron_52_3'>great stellated dodecahedron</Link>.
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>Great icosahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_highlight_face_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>Highlight a face {'{'}3{'}'}</figcaption>
        </figure>

        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_vertex_figure_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure</figcaption>
        </figure>
        </div>

        <h4>Construction</h4>
        <ul>
        <li>
        Stellation from an <Link to='/Polyhedron_3_5'>icosahedron</Link>:

        The great icosahedron is the only stellation based on an icosahedron among
        all the four Kepler–Poinsot polyhedra.

        A new edge is the intersection of the x face and the y face. 
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
            <figcaption>Stellation of an icosahedron [to be updated]</figcaption>
        </figure>
        </div>
        </li>

        <li>
        Faceting from an icosahedron:

        The 12 vertices are the vertices of an icosahedron. 
        Start from a face on an icosahedron. 
        Find its three adjacent faces. There are three vertices 
        from the adjacent faces that are not 
        the vertices of the starting face. If we connect these 
        3 vertices, we have an equilateral triangle. That is a 
        face of the great icosahedron.

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/dodecahedron_faceting_pentagram.png')} alt = 'static'/>
            <figcaption>Faceting from an icosahedron [to be updated]</figcaption>
        </figure>
        </div>

        </li>
        </ul>




        <h4>Exploded view</h4>
        <div>
        Since all the faces on this star polyhedron overlap and intersect with each other, 
        it is easier to see the faces when we explode them. In this animation, 
        I move the faces
        away from the center. 
        You may focus on a face to see how it fits together with other faces.
        </div>


        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatIcosahedron/exploded_GreatIcosahedron.gif')} alt = 'static'/>
            <figcaption>Great icosahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great icosahedron </span>);
  }
}

export default Polyhedron_3_52;

