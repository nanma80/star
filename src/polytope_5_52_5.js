import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The polytope with 
            the Schläfli symbol {'{'}5, 5/2, 5{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_120-cell" 
                target="_blank" rel="noopener noreferrer">Great 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5, 5/2{'}'}, aka the <Link to='/Polyhedron_5_52'>great dodecahedron</Link>.
            There are 120 cells, 720 pentagonal faces, 720 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/pov_whole_polytope_5_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 5{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell to get the <Link to='/Polytope_52_5_3'>
                small stellated 120-cell, {'{'}5/2, 5, 3{'}'}</Link>, where each cell is
            a small stellated dodecahedron, {'{'}5/2, 5{'}'}.
            Then, we take the convex hull of each pentagrammic 
            face to construct a pentagonal face,
            so that each cell is a great dodecahedron, {'{'}5, 5/2{'}'}.
            This way, the whole polytope becomes the {'{'}5, 5/2, 5{'}'}.
            We construct brand new edges.
            This polytope can be considered as
            the second stellation of the 120-cell. 
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.
            
            Since each cell {'{'}5/2, 5{'}'} of the {'{'}5/2, 5, 3{'}'} becomes {'{'}5/2, 5{'}'},
            the number of cells remains the same: 120. 

            Since each face of {'{'}5/2{'}'} becomes {'{'}5{'}'}, the number of faces 
            remains the same: 720.

            The old edges are abandoned and new edges are constructed. 
            There are the same number
            of edges per cell (30). However, previously each edge is shared by 3 cells. Now, 
            each edge is shared by 5 cells. 
            The number of edges dropped to 3/5 of the preivous count, 
            from 1200 to 720.

            The vertices of the {'{'}5/2, 5, 3{'}'} are reused. 
            The number of vertices remains 120.

            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5/2, 5, 3{'}'}: the small stellated dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/stellated_dodecahedron_4.png')} alt = 'static'/>
                <figcaption>Extend a face of the small stellated dodecahedron</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5, 5/2, 5{'}'}: the great dodecahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            Recall that the first layer of the 600-cell forms a 4D pyramid with 
            an icosahedral base. That is, the projection of these cells is an icosahedron.

            When you inscribe a great dodecahedron 
            in the icosahedron using the same vertices, 
            you get a cell in {'{'}5, 5/2, 5{'}'}.
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
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            Finally the exploded view of the whole polytope.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5,5/2,5}"/>

            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/vertex_figure_polytope_5_52_5.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_vertex_explode.gif')} alt = 'static'/>
                <figcaption>12 cells meeting at a vertex</figcaption>
            </figure>
            </div>
            <div>
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> {'{'}5, 5/2, 5{'}'} </span>);
  }
}

export default Polyhedron_5_52_5;

