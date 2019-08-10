import React from 'react';
import App from './App';

class Polyhedron_5_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
        <div>
    	<div>
		The regular dodecahedron is one of the five regular convex 
        polyhedra (<a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>).
        There are 12 faces, each of which is a regular pentagon. 
        </div>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>regular dodecahedron</figcaption>
        </figure>
        </div>
        <h4>The north face</h4>
        <div>
        I think of the faces in the following way. I call the direction of one of the face as "north". 
        Maybe this face is called "north face". And the face center is the "north pole".
        There are 5 neighboring faces adjacent to the north face. These 6 faces roughly form a bowl and
        cover most of the "northern hemisphere".
        By symmetry, the other 6 faces form the "southern hemisphere". These two parts give the whole dodecahedron.
        </div>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_north_pole_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>regular dodecahedron from the north pole</figcaption>
        </figure>
        </div>

        <div>
        An interesting <strong>projection</strong> from 3D to 2D is to view the dodecahedron from above the north pole.
        In this projection, a pentagon is at the center and the projection doesn't have any distortion. 
        The other 5 visible pentagons are distorted because they are viewed at an angle. The whole 2D image
        has a 5-fold rotational symmetry.
    	</div>
        <h4>Vertex figure</h4>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_vertex_figure_Dodecahedron.png')} alt = 'static'/>
            <figcaption>slice off a vertex to see the vertex figure</figcaption>
        </figure>
        </div>
        <div>
        If we slice off a little tip of a vertex of the dodecahedron with a plane, the section will be a small
        triangle. The shape is the same as long as the cut is shallow enough to avoid cutting over other vertices.
        This shape is called the vertex figure. The vertex figure is a more precise way to characterize 
        the edges and faces meeting at a vertex. The vertex figure is a triangle, which implies the 3 edges and
        3 faces meet at the vertex. In addition, the vertex figure is an <strong>equilateral</strong> (regular) triangle, which
        implies the symmetry of the vertex. Regular polyhedra are required to have regular vertex figures.
        </div>

        <h4>Notation</h4>
        <div>
        The <a href="https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol" target="_blank" rel="noopener noreferrer">Schläfli symbol</a> denotes 
        the regular dodecahedron as {'{'}5, 3{'}'} because each face is a {'{'}5{'}'} (pentagon), and each
        vertex figure is a {'{'}3{'}'} (triangle). Alternatively, the number 3 means there are 3 edges and 3 faces 
        meeting at each vertex.
        </div>
        </div>
    	)
    ;

    this.state.contentHeader = (<span> Dodecahedron </span>);
  }
}

export default Polyhedron_5_3;

