import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
        <div>
        The regular icosahedron is another one of the five regular convex 
        polyhedra (<a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>).
        The <a href="https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol" target="_blank" rel="noopener noreferrer">Schläfli symbol</a> is 
        {'{'}3, 5{'}'} because each face is a {'{'}3{'}'} (triangle), and each
        vertex figure is a {'{'}5{'}'} (pentagon).
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption>Regular icosahedron</figcaption>
        </figure>
        </div>

        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_vertex_figure_Icosahedron.png')} alt = 'static'/>
            <figcaption>Vertex figure</figcaption>
        </figure>
        </div>

        <h4>The north pole</h4>
        <div>
        The regular icosahedron is the dual of the regular dodecahedron. It means the faces
        of one shape correspond to the vertices of the other. Specifically, if you place a
        vertex at the center of each face on a dodecahedron, the new vertices form an icosahedron.
        <br/>
        In the <Link to='/Polyhedron_5_3'>dodecahedron page</Link> we described the "north pole"
        as one of the face centers. The dual icosahedron will have a vertex at the "north pole".
        There are 5 neighboring vertices to the north pole, which are on the northern hemisphere.
        The same structure exists on the southern hemisphere.
        When we view the icosahedron directly above the north pole, the projection also has
        a 5-fold symmetry. 
        For consistency across the duality relationship, in any 3D shapes here, we call the "north pole"
        the face center of a dodecahedron, or a vertex of an icosahedron.
        </div>
        <div class = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_north_pole_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption>Projection centered at the north pole</figcaption>
        </figure>
        </div>

        <br/>
        <div>
        After warming up by the dodecahedron and the icosahedron,
        in the next page, we start to see the first star polyhedron: the <Link to='/Polyhedron_52_5'>small stellated dodecahedron</Link>.
        </div>


    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Icosahedron </span>);
  }
}

export default Polyhedron_3_5;

