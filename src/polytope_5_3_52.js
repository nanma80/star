import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
           <div>
            The polytope with 
            the Schläfli symbol {'{'}5, 3, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Grand_120-cell" 
                target="_blank" rel="noopener noreferrer">Grand 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5, 3{'}'}, aka the <Link to='/polyhedron_5_3'>dodecahedron</Link>.
            There are 120 cells, 720 faces, 720 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/pov_whole_polytope_5_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}5, 3, 5/2{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell to get the <Link to='/Polytope_52_3_5'>
            great stellated 120-cell, {'{'}5/2, 3, 5{'}'}</Link>, where each cell is
            a great stellated dodecahedron, {'{'}5/2, 3{'}'}.

            Then, we take the convex hull of the great stellated dodecahedron
            to construct a dodecahedron.
            The result is the polytope {'{'}5, 3, 5/2{'}'}.
            We reuse the vertices and create new faces and edges.
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.

            Compared with {'{'}5/2, 3, 5{'}'}, each cell is replaced by its convex hull. 
            The number of cells remains the same: 120.

            Faces and edges are new. The counts are both 720.

            Taking convex hull doesn't affect vertices. The number of new vertices is still 120.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/dodecahedron_faceting_2.png')} alt = 'static'/>
                <figcaption>Taking the convex hull of {'{'}5/2, 3{'}'} to 
                construct a cell {'{'}5, 3{'}'}</figcaption>
            </figure>
            </div>
            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            
            Recall that the projection of the first 3 layers of the 600-cell forms a
            dodecahedron with concave faces. 
            This dodecahedron is a cell of {'{'}5, 3, 5/2{'}'}.
            These vertices are the "middle latitude vertices" of the 600-cell.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_3_3.gif')} alt = 'static'/>
                <figcaption>The first 3 layers of the 600-cell, with the third layer exploded</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
                <figcaption>Regular dodecahedron</figcaption>
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
            <br/>
            <div>
            The adjacency relation of the cells is different.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5,3,5/2}"/>

            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/vertex_figure_polytope_5_3_52.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            [To be updated]
            Each vertex is where 12 icosahedra meet. Each icosahedron brings 
            a pentagon to the vertex figure of the polytope. 
            The vertex figure is a great dodecahedron, which has 12 intersecting pentagonal faces.
            The 12 cells meeting at a vertex, for example,
            the north pole, are the second layer cells. 
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Grand 120-cell {'{'}5, 3, 5/2{'}'} </span>);
  }
}

export default Polyhedron_5_3_52;

