import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_52_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
        <div>
            The great stellated dodecahedron is one of the four regular
            star polyhedra, known as <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
            The Schläfli symbol is {'{'}5/2, 3{'}'}. 
             Each face is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>). Each
        vertex figure is a {'{'}3{'}'} (triangle).
        There are 12 faces and 20 vertices.
           The dual polyhedra is {'{'}3, 5/2{'}'}, aka <Link to='/Polyhedron_3_52'>great icosahedron</Link>.
        </div>
        <br/>
        <div>
            Comparing the great stellated dodecahedron {'{'}5/2, 3{'}'} and the small stellated dodecahedron {'{'}5/2, 5{'}'},
            the faces on both solids are regular pentagrams. But the great one has 3 faces meeting at each vertex and the small one has 5.
            The great one appears spikier than the small one. If the sizes of the pentagrams are the same, the faces on the great stellated
            dodecahedron will be closer to the center.
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Great stellated dodecahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_highlight_face_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Highlight a face {'{'}5/2{'}'}</figcaption>
        </figure>

        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_vertex_figure_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure {'{'}3{'}'}</figcaption>
        </figure>
        </div>



        <h4>Construction</h4>
        <ul>
        <li>
        Stellation from a dodecahedron:
        The great stellated dodecahedron is the third and final stellation of the dodecahedron, following the
        small stellated dodecahedron and the great dodecahedron. It can be constructed by extending the 
        edges of the <Link to='/Polyhedron_5_52'>great dodecahedron</Link>, so that each face is changed
        from a pentagon to a pentagram.
        We can illustrate the face together
        with the previous stellations as follows.

        Just like in great dodecahedron, a new edge also is the intersection of the "north face"
        and a face in the southern hemisphere. But the edge here is longer than the one in the great dodecahedron.
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/polygon/pentagram_inside_outside_2.png')} alt = 'static'/>
            <figcaption>Connections among faces of <br/>dodecahedron (red), 
            <br/>small stellated dodecahedron (blue edges), <br/>great dodecahedron (green edges), 
            <br/>great stellated dodecahedron (purple edges) </figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
            <figcaption>Extending edges of a great dodecahedron</figcaption>
        </figure>
        </div>
        </li>

        <li>
        Faceting from a dodecahedron:

        The 20 vertices are the vertices of a dodecahedron. We first recall that in 
        a <Link to='/Polyhedron_5_3'>dodecahedron</Link>, there is a loop consisting of 10 line segments 
        near the "equator". It contains 10 vertices, 5 of which in the northern hemisphere and 5 in the southern.
        If we pick the 5 vertices in the northern hemisphere and connect them into a pentagram, we have a face of
        the great stellated dodecahedron.
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/dodecahedron_faceting_pentagram.png')} alt = 'static'/>
            <figcaption>Faceting from a dodecahedron</figcaption>
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
            <img src = {require('./images/GreatStellatedDodecahedron/exploded_GreatStellatedDodecahedron.gif')} alt = 'static'/>
            <figcaption>Great stellated dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated dodecahedron</span>);
  }
}

export default Polyhedron_52_3;

