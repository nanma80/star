import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The polytope with 
            the Schläfli symbol {'{'}3, 5, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Icosahedral_120-cell" 
                target="_blank" rel="noopener noreferrer">Icosahedral 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}3, 5{'}'}, aka the <Link to='/Polyhedron_3_5'>Icosahedon</Link>.
            There are 120 cells, 1200 pentagonal faces, 720 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
            </figure>
            </div>

            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell to get the <Link to='/Polytope_5_52_5'>
            great 120-cell, {'{'}5, 5/2, 5{'}'}</Link>, where each cell is
            a great dodecahedron, {'{'}5, 5/2{'}'}.
            Then, we take the convex hull of each cell 
            to construct an icosahedral cell, {'{'}3, 5{'}'}.
            This way, the whole polytope becomes the {'{'}3, 5, 5/2{'}'}.

            Overall we construct brand new faces.
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.
            
            Since each cell {'{'}5, 5/2{'}'} of the {'{'}5, 5/2, 5{'}'} becomes {'{'}3, 5{'}'},
            the number of cells remains the same: 120. 

            The old faces are abandoned. All the faces are new. The new number of faces is 20 * 120 / 2 = 1200.

            All the edges of {'{'}5, 5/2, 5{'}'} are reused in the new polytope. The number of edges remains
            the same: 720.

            All the edges of {'{'}5, 5/2, 5{'}'} are reused in the new polytope. The number of edges remains
            the same: 120.

            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5, 5/2, 5{'}'}: the great dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
                <figcaption>The new cell by taking the convex hull: the regular icosahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            Recall that the first layer of the 600-cell forms a 4D pyramid with 
            an icosahedral base. That is, the projection of these cells is an icosahedron.

            Use this icosahedron as a cell, and you get a cell in {'{'}5, 5/2, 5{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>The first layer of the 600-cell</figcaption>
            </figure>
            </div>

            </li>
            </ul>


            <h4>Structure</h4>
            <div>
            In this section, let us start from the center vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator.
            </div>



            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            Finally the exploded view of the whole polytope.
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,5,5/2}"/>

            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/vertex_figure_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>
            <div>
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> {'{'}3, 5, 5/2{'}'} </span>);
  }
}

export default Polyhedron_3_5_52;

