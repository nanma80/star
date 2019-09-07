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
            The polytope with 
            the Schläfli symbol {'{'}3, 3, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Grand_600-cell" 
                target="_blank" rel="noopener noreferrer">Grand 600-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}3, 3{'}'}, aka the tetrahedron.
            There are 600 cells, 1200 pentagonal faces, 720 edges, and 120 vertices.
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

            I know the angle between the two cell centers, seen from the origin, is
            arccos((1 - 3*Sqrt(5))/8). However, I don't have a good way to
            describe the relationship between these two cells.
            </div>
            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:

            Below is a cell first projection of the 600-cell. We didn't show this
            projection in the 600-cell page. This projection has a tetrahedral symmetry,
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
            center vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 600-cell. 
            They have the same layers of cells. Unlike in the 600-cell, where the 
            cell only touch each other, in the grand 600-cell, the cell heavily
            intersect with each other.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 1</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            [Layer 4 is broken. Need to fix.]

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_6_6.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 6</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_7_7.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 7</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_8_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 8</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,3,5/2}"/>

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

    this.state.contentHeader = (<span> Grand 600-cell {'{'}3, 3, 5/2{'}'} </span>);
  }
}

export default Polyhedron_3_3_52;

