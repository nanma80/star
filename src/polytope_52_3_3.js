import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_52_3_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
           <div>
            The polytope with 
            the Schläfli symbol {'{'}5/2, 3, 3{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_grand_stellated_120-cell" 
                target="_blank" rel="noopener noreferrer">Great grand stellated 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5/2, 3{'}'}, aka the <Link to='/Polyhedron_52_3'>great stellated dodecahedron</Link>.
            There are 120 cells, 720 faces, 1200 edges, and 600 vertices.
            It is the only Schläfli–Hess polytope with 600 vertices. All the others have 120.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/pov_whole_polytope_52_3_3.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 3, 3{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell many steps to get 
            the <Link to='/Polytope_5_52_5'>
            great grand 120-cell, {'{'}5, 5/2, 3{'}'}</Link>, where each cell is
            a great dodecahedron, {'{'}5, 5/2{'}'}.

            Then, we extend its edges to stellate each cell 
            to construct a great stellated dodecahedron.
            The result is a {'{'}5/2, 3, 3{'}'}.
            </div>
            <br/>
            <div>
            When we stellated {'{'}5, 5/2, 3{'}'} to get {'{'}5/2, 3, 3{'}'},
            we modified each cell and each face without creating new elements. 
            We extended each edge. The cell, face, and edge
            counts remain the same: 120, 720, and 1200, respectively.

            Extending edges creates new vertices. 
            In {'{'}5/2, 3, 3{'}'} the vertices coincide with those of a 120-cell. 
            There are 600 vertices.
            </div>

            <br/>
            <div>
            {'{'}5/2, 3, 3{'}'} is known as the final stellation of the 120-cell.
            It is analogous to the 3D {'{'}5/2, 3{'}'}, aka the great stellated dodecahedron.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5, 5/2, 3{'}'}: the great dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Extending edges to get a cell in {'{'}5/2, 3, 3{'}'}: the great stellated dodecahedron</figcaption>
            </figure>
            </div>


            </li>
            <li>
            Faceting from the <Link to='/Polytope_5_3_3'>120-cell</Link>:

            Since the vertices of this polytope coincide with those of the 120-cell, it can be 
            constructed by faceting the 120-cell rather than the 600-cell.

            In the projection of the 120-cell, we can find 20 vertices highlighted in the first image
            below. They form the vertices of a dodecahedron. 
            These vertices are the vertices with the lowest latitude in the northern hemisphere.

            If we use the 20 vertices of this dodecahedron
            and construct a great stellated dodecahedron, we get a cell of {'{'}5/2, 3, 3{'}'}.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/pov_alternative_polytope_5_3_3_cell120.png')} alt = 'static'/>
                <figcaption>The 20 vertices with the lowest latitude in the northern hemisphere on the 120-cell</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Use the 20 vertices to form the great stellated dodecahedron</figcaption>
            </figure>

            </div>

            </li>
            </ul>


            <h4>Structure</h4>
            <div>
            In this section, let us start from the center cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator. 
            The adjacency relation of the cells is different from the 120-cell.
            It is as same as the relation 
            in the second generation star
            polytopes {'{'}5, 3, 5/2{'}'}, {'{'}5/2, 5, 5/2{'}'}, and {'{'}5, 5/2, 3{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div>
            Just like in {'{'}5, 3, 5/2{'}'}, {'{'}5/2, 5, 5/2{'}'}, and {'{'}5, 5/2, 3{'}'},
            the Layer 4 (low latitude) cells
            in the <strong>southern</strong> hemisphere are 
            adjacent to the north cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            <div>
            Finally, here is the exploded view of the whole polytope.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{5/2,3,3}"/>


            <h4>Comparison with {'{'}5/2, 3, 5{'}'}</h4>
            <div>
            Just like in previous second generation stellations,
            in the exploded view of {'{'}5/2, 3, 3{'}'}, 
            at some point right after the explosion begins,
            the cells were arranged just like in {'{'}5/2, 3, 5{'}'}.

            In the visualization above using vZome, if you set the 
            "explode / Implode" slider to 6 or 7, you see the unexploded
            projection of {'{'}5/2, 3, 5{'}'}. You can use two windows
            to compare {'{'}5/2, 3, 3{'}'} with explode factor = 6 
            and {'{'}5/2, 3, 5{'}'} with explode factor = 0.
            </div>
            <br/>
            <div>
            Here are the exploded views of Layer 2 and the whole polytopes for comparison.
            </div>         
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5/2, 3, 3{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5/2, 3, 5{'}'}</figcaption>
            </figure>
            </div>

            <div>
            Below are the animations showing the partial 
            explosion of {'{'}5/2, 3, 3{'}'} until it becomes {'{'}5/2, 3, 5{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_diff_shapes_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view of Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_diff_shapes_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view of all layers</figcaption>
            </figure>
            </div>


            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_3/vertex_figure_polytope_52_3_3.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_3/polytope_52_3_3_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 4 great stellated dodecahedra meet. 
            The vertex figure is a tetrahedron.
            The 4 cells meeting at a vertex is not any layer in the cell first projection,
            which we showed in this page. 
            They form a layer in a vertex first projection.
            However, there are too many layers in the vertex first projection of the 120-cell,
            or {'{'}5/2, 3, 3{'}'}. It would still be very hard to see the layers 
            in that projection.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great grand stellated 120-cell {'{'}5/2, 3, 3{'}'} </span>);
  }
}

export default Polyhedron_52_3_3;

