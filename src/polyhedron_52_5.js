import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
        <div>
    		The small stellated dodecahedron is one of the four regular
            star polyhedra, known as the <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
            The faces of these polyhedra are identical regular polygons or star polygons, and 
            the vertex figures are identical regular polygons or star polygons.
            They are natural extensions of the five Platonic solids into the "star" domain.
        </div>
        <br/>
        <div>
            The Schläfli symbol of the small stellated dodecahedron
        is {'{'}5/2, 5{'}'} because each face is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>), and each
        vertex figure is a pentagon. This means five faces meet at each vertex. 
        There are 12 faces, 30 edges and 12 vertices. The famous Euler's polyhedron formula,
        V - E + F = 2, does <strong>not</strong> hold. 
        In general, the star
        polytopes don't have to satisfy the formula.
        The dual polyhedra is {'{'}5, 5/2{'}'}, aka the <Link to='/Polyhedron_5_52'>great dodecahedron</Link>.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Small stellated dodecahedron</figcaption>
        </figure>
        </div>


        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_highlight_face_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Highlight a face {'{'}5/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_vertex_figure_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure {'{'}5{'}'}</figcaption>
        </figure>
        </div>

        <h4>Construction</h4>
        <ul>
        <li>
        Stellation from a dodecahedron:
        The 12 pentagrammic faces can be seen as the stellation 
        of the 12 pentagonal faces of dodecahedron.
        We can extend the edges of a dodecahedron to get 
        the small stellated dodecahedron.
        The whole polyhedron can also be constructed as 
        placing pentagonal prism on top of the faces of
        dodecahedron.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/stellated_dodecahedron.png')} alt = 'static'/>
            <figcaption>Stellation from a dodecahedron</figcaption>
        </figure>
        </div>

        </li>
        <li>
        Faceting from an icosahedron:
        The 12 vertices are the vertices of an icosahedron. 
        We first recall that in an <Link to='/Polyhedron_3_5'>icosahedron</Link>, if we think of a vertex as the north pole, there are 5 other
        vertices on the northern hemisphere with the same latitude. These 5 vertices form
        a pentagon. We can construct a pentagram inside this pentagon by constructing diagonals.
        Such a pentagram is a face of the small stellated dodecahedron.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/icosahedron_faceting_pentagram.png')} alt = 'static'/>
            <figcaption>Faceting from an icosahedron</figcaption>
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

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/exploded_SmallStellatedDodecahedron.gif')} alt = 'static'/>
            <figcaption>Small stellated dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Small stellated dodecahedron</span>);
  }
}

export default Polyhedron_52_5;

