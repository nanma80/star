import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Polyhedron_52_3 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (
        <div>
        <div>
            The great stellated dodecahedron is one of the four regular
            star polyhedra, known as the <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
            The Schläfli symbol is {'{'}5/2, 3{'}'}. 
             Each face is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>). Each
        vertex figure is a {'{'}3{'}'} (triangle).
        There are 12 faces, 30 edges and 20 vertices. The famous Euler's polyhedron formula,
        V - E + F = 2, happen to hold. 
        However, in general, the star
        polytopes don't have to satisfy the formula. 
           The dual polyhedra is {'{'}3, 5/2{'}'}, aka the <Link to='/Polyhedron_3_52'>great icosahedron</Link>.
        </div>
        <br/>
        <div>
            Comparing the great stellated dodecahedron {'{'}5/2, 3{'}'} to the small stellated dodecahedron {'{'}5/2, 5{'}'},
            the faces on both solids are regular pentagrams. The great one has 3 faces meeting at each vertex, and the small one has 5.
            The great one appears spikier than the small one. If the sizes of the pentagrams are the same, the faces on the great stellated
            dodecahedron will be closer to the center.
        </div>

        </div>
        );

    this.state.content = (
    	<div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Great stellated dodecahedron</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_highlight_face_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Highlight a face {'{'}5/2{'}'}</figcaption>
        </figure>

        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_vertex_figure_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure {'{'}3{'}'}</figcaption>
        </figure>
        </div>



        <h4 id="construction">Construction</h4>
        <ul>
        <li>
        Stellation from a dodecahedron:
        The great stellated dodecahedron is the third and final stellation of the dodecahedron, following the
        small stellated dodecahedron and the great dodecahedron. It can be constructed by extending the 
        edges of the <Link to='/Polyhedron_5_52'>great dodecahedron</Link>, so that each face is changed
        from a pentagon to a pentagram.
        We can illustrate the face together
        with the previous stellations as the picture below.

        Just like in great dodecahedron, a new edge also is the intersection of the "north face"
        and a face in the southern hemisphere. The edge here is longer than the 
        one in the great dodecahedron. 
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polygon/pentagram_inside_outside_2.png')} alt = 'static'/>
            <figcaption>Connections among the faces of <br/>the dodecahedron (red), 
            <br/>the small stellated dodecahedron (blue edges), 
            <br/>the great dodecahedron (yellow edges), 
            <br/>the great stellated dodecahedron (purple edges) </figcaption>
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
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/dodecahedron_faceting_pentagram.png')} alt = 'static'/>
            <figcaption>Faceting from a dodecahedron to get one face</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/dodecahedron_faceting_2.png')} alt = 'static'/>
            <figcaption>Faceting from a dodecahedron</figcaption>
        </figure>

        </div>

        </li>
        </ul>




        <h4 id="exploded">Exploded view</h4>
        <div>
        Since all the faces on this star polyhedron overlap and intersect with each other, 
        it is easier to see the faces when we explode them. In this animation, 
        I move the faces
        away from the center. 
        You may focus on a face to see how it fits together with other faces.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/exploded_GreatStellatedDodecahedron.gif')} alt = 'static'/>
            <figcaption>Great stellated dodecahedron, exploded view</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated dodecahedron {'{'}5/2, 3{'}'}</span>);
  }
}

export default Polyhedron_52_3;

