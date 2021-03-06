import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Polyhedron_5_52 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (
        <div>
        <div>
            The great dodecahedron is one of the four regular
            star polyhedra, known as the <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
             The Schläfli symbol is {'{'}5, 5/2{'}'}. 
             Each face is a {'{'}5{'}'} (pentagon). Each
        vertex figure is a {'{'}5/2{'}'} (<Link to='/pentagram'>pentagram</Link>). 
        There are 12 faces, 30 edges and 12 vertices. The famous Euler's polyhedron formula,
        V - E + F = 2, does <strong>not</strong> hold. 
        In general, the star
        polytopes don't have to satisfy the formula.
           The dual polyhedra is {'{'}5/2, 5{'}'}, aka the <Link to='/Polyhedron_52_5'>small stellated dodecahedron</Link>.
        </div>
        <br/>
        <div>
        Although the edges of the great dodecahedron are identical to the edges of
        the <Link to='/Polyhedron_3_5'>regular icosahedron</Link>,
        the faces are different. 
        Therefore they are different solids.
        </div>

        </div>
        );

    this.state.content = (
    	<div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Great dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_highlight_face_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Highlight a face {'{'}5{'}'}</figcaption>
        </figure>
        </div>

        <h4 id="construction">Construction</h4>
        <ul>
        <li>
        Stellation from a dodecahedron:
        The small stellated dodecahedron is already a stellation of the dodecahedron by 
        extending edges.
        Here, we take the pentagrammic faces of the small stellated dodecahedron and create
        the convex hulls, which are pentagons, to form the faces of the great dodecahedron.
        Overall, we extend <strong>each face</strong> of dodecahedron 
        to get a bigger pentagon. 
        
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polygon/pentagram_inside_outside.png')} alt = 'static'/>
            <figcaption>Connections among the faces of <br/>the dodecahedron (red), 
            <br/>the small stellated dodecahedron (blue edges), 
            <br/>and the great dodecahedron (yellow edges)</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/stellated_dodecahedron_4.png')} alt = 'static'/>
            <figcaption>Extend a face of the small stellated dodecahedron</figcaption>
        </figure>
        </div>

        If we directly stellate the dodecahedron to get the great dodecahedron, 
        we extend the "north face" and a face in the southern hemisphere until they meet,
        to get an edge.

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/stellated_dodecahedron_2.png')} alt = 'static'/>
            <figcaption>Extend two faces to get an new edge</figcaption>
        </figure>

        </div>

        The concept of stellation not only includes extending edges 
        (1D components) but also extending faces (2D components). In higher dimensions it also 
        includes extending 3D components (cells). We say the small stellated dodecahedron is the first stellation
        of the dodecahedron and the great dodecahedron is the second stellation.

        </li>
        <li>
        Faceting from an icosahedron:
        The 12 vertices are the vertices of an icosahedron.
        We first recall that in an <Link to='/Polyhedron_3_5#north'>icosahedron</Link>, 
        if we think of a vertex as the north pole, there are 5 other
        vertices on the northern hemisphere with the same latitude. These 5 vertices form
        a pentagon. Each pentagon is a face of the great dodecahedron.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/icosahedron_faceting_pentagon.png')} alt = 'static'/>
            <figcaption>Faceting from an icosahedron</figcaption>
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
            <img src = {require('./images/GreatDodecahedron/exploded_GreatDodecahedron.gif')} alt = 'static'/>
            <figcaption>Great dodecahedron, exploded view</figcaption>
        </figure>
        </div>

        <h4 id="vertex">Vertex Figure</h4>
        <div>
        Five pentagonal faces meet at each vertex. 
        The internal angles of a regular pentagon are 108°. Since 108° * 5 = 540° > 360°,
        we know the structure of the vertex must be special. Actually the faces intersect
        around each vertex, making a star-like path.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_vertex_figure_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure: {'{'}5/2{'}'}</figcaption>
        </figure>
        </div>

        <div>
        Let's use the animations to see how the five faces are arranged around a vertex.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/vertex_exploded_GreatDodecahedron_centered_at_vertex.gif')} alt = 'static'/>
            <figcaption>The faces meeting at a vertex</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/vertex_exploded_GreatDodecahedron.gif')} alt = 'static'/>
            <figcaption>The faces meeting at a vertex from a different angle</figcaption>
        </figure>
        </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great dodecahedron {'{'}5, 5/2{'}'} </span>);
  }
}

export default Polyhedron_5_52;

