import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The star polytope with 
            the Schläfli symbol {'{'}3, 3, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Grand_600-cell" 
                target="_blank" rel="noopener noreferrer">grand 600-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}3, 3{'}'}, aka the tetrahedron.
            There are 600 cells, 1200 pentagonal faces, 720 edges, and 120 vertices in total.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/pov_whole_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5/2{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>600-cell</Link>:

            Unlike the other Schläfli–Hess polytopes, we need to stellate from 
            the 600-cell rather than the 120-cell to get the grand 600-cell.

            For each tetrahedral cell on the 600-cell, we construct a bigger tetrahedron
            with the same center. The size of the tetrahedron
            is such that the stellated cell touches another stellated cell from 
            somewhere in the other hemisphere. 

            The angle between the centers of two adjacent cell centers, 
            seen from the origin, is
            arccos((1 - 3*Sqrt(5))/8). However, I don't know an intuitive way to
            describe the relationship between these two cells.
            </div>
            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:

            Below is a cell-first projection of the 600-cell. This is different
            from the vertex-first projection we showed in the 600-cell page. 
            This projection has a tetrahedral symmetry,
            just as the centered cell has the same symmetry.

            We highlight the 4 vertices in the northern hemisphere with the lowest latitude.
            When we construct a tetrahedron using these 4 vertices,
            we get a cell in {'{'}3, 3, 5/2{'}'}.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_alternative_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>The 4 vertices with the lowest latitude (cell first) in the northern hemisphere on the 600-cell</figcaption>
            </figure>
            </div>

            </li>
            </ul>


            <h4>Structure</h4>
            <div>
            In this section, let us start from the 
            centered vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 600-cell. 
            They have the same layers of cells. Unlike in the 600-cell, where the 
            cell only touch each other, in the grand 600-cell, the cell heavily
            intersect with each other.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 1</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_6_6.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 6</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_7_7.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 7</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_8_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 8</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,3,5/2}"/>

            <h4>Comparison with the 600-cell</h4>
            <div>
            In the exploded view of {'{'}3, 3, 5/2{'}'}, 
            at some point
            the cells are arranged just like in 
            the 600-cell, {'{'}3, 3, 5{'}'}.

            In the visualization above using vZome, if you set the 
            "explode / Implode" slider to 34, you see the unexploded
            projection of {'{'}3, 3, 5{'}'}. You can use two windows
            to compare this polytope {'{'}3, 3, 5/2{'}'} with explode factor = 34 
            and the 600-cell {'{'}3, 3, 5{'}'} with explode factor = 0.
            </div>
            <br/>
            <div>
            Here are the exploded views of Layer 1 for comparison.
            </div>         
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 1 of {'{'}3, 3, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 1 of {'{'}3, 3, 5{'}'}</figcaption>
            </figure>
            </div>

            <div>
            Below are the animations showing the partial 
            explosion of {'{'}3, 3, 5/2{'}'} until it becomes {'{'}3, 3, 5{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_diff_shapes_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded view of Layer 1</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_diff_shapes_layers_1_8.gif')} alt = 'static'/>
                <figcaption>Exploded view of all layers</figcaption>
            </figure>
            </div>


            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/vertex_figure_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 20 tetrahedra meet. Each tetrahedron brings 
            a triangle to the vertex figure of the polytope. 
            The vertex figure is a great icosahedron 
            with 20 intersecting triangular faces.
            The 20 cells meeting at the north pole are the Layer 7 cells. This layer has the 
            lowest latitude above the equator.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Grand 600-cell {'{'}3, 3, 5/2{'}'} </span>);
  }
}

export default Polyhedron_3_3_52;

