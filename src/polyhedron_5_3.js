import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_5_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
        <div>
    	<div>
        Before going into star polyhedra, let us warm up ourselves by some non-star polyhedra.
		The regular dodecahedron is one of the five regular convex 
        polyhedra (<a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>).
        There are 12 faces, each of which is a regular pentagon. 
        </div>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>Regular dodecahedron</figcaption>
        </figure>
        </div>
        <h4>The north face</h4>
        <div>
        I think of the faces in the following way. I call the direction of one of the face as "north". 
        Maybe this face is called "north face". And the face center is the "north pole".
        There are 5 neighboring faces adjacent to the north face. These 6 faces roughly form 
        the "northern hemisphere". The shape is like a bowl.
        By symmetry, the other 6 faces form the "southern hemisphere". 
        Putting these two parts together gives the whole dodecahedron.
        The seam between the two hemisphere is a loop of ten line segments, which is 
        roughly the "equator". From north to south, we have four "rings" of faces.
        The rings contain 1, 5, 5, 1 faces, respectively.
        </div>
        <br/>
        <div>

        These terms sound arbitrary. But I find them useful to 
        create a mental image of the faces and useful in imagining 4D shapes.
        </div>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_north_pole_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>Projection centered at the north pole</figcaption>
        </figure>
        </div>

        <div>
        An interesting <strong>projection</strong> from 3D to 2D is to view the dodecahedron from above the "north pole".
        A "north face" pentagon is at the center and 
        the projection of it doesn't have any distortion. 
        The other 5 adjacent pentagons are distorted 
        because they are viewed at an angle. The whole 2D image
        has a 5-fold rotational symmetry.
    	</div>
        <h4>Vertex figure</h4>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_vertex_figure_Dodecahedron.png')} alt = 'static'/>
            <figcaption>Slice off a vertex to see the vertex figure</figcaption>
        </figure>
        </div>
        <div>
        If we slice off a little tip of a vertex of the dodecahedron with a plane, the section will be a small
        triangle. The shape is the same as long as the cut is shallow enough to avoid cutting over other vertices.
        This shape is called the <a href="https://en.wikipedia.org/wiki/Vertex_figure" target="_blank" rel="noopener noreferrer">vertex figure</a>. 
        The vertex figure of the regular dodecahedron is a an <strong>equilateral</strong> (regular) triangle, which
        implies the symmetry of the vertex. 
        Regular polyhedra are required to have regular vertex figures.
        </div>

        <h4>Notation</h4>
        <div>
        The <a href="https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol" target="_blank" rel="noopener noreferrer">Schläfli symbol</a> denotes 
        the regular dodecahedron as {'{'}5, 3{'}'} because each face is a {'{'}5{'}'} (pentagon), and each
        vertex figure is a {'{'}3{'}'} (triangle). Alternatively, the number 3 means there are 3 edges and 3 faces 
        meeting at each vertex.
        </div>
        <br/>
        <div>
        In the next page, we will see the dual polyhedron: the <Link to='/Polyhedron_3_5'>icosahedron</Link>.
        </div>
        </div>
    	)
    ;

    this.state.contentHeader = (<span> Dodecahedron </span>);
  }
}

export default Polyhedron_5_3;

