import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_52_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The polytope with 
            the Schläfli symbol {'{'}5, 5/2, 3{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_grand_120-cell" 
                target="_blank" rel="noopener noreferrer">Great grand 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5, 5/2{'}'}, aka the <Link to='/Polyhedron_5_52'>great dodecahedron</Link>.
            There are 120 cells, 720 pentagonal faces, 1200 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/pov_whole_polytope_5_52_3.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 3{'}'}</figcaption>
            </figure>
            </div>

            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell many steps 
            until we get the <Link to='/Polytope_52_5_52'>
            grand stellated 120-cell, {'{'}5/2, 5, 5/2{'}'}</Link>, where each cell is
            a small stellated dodecahedron, {'{'}5/2, 5{'}'}.
            Then, we take the convex hull of each pentagrammic 
            face to construct a pentagonal face,
            so that each cell is a great dodecahedron, {'{'}5, 5/2{'}'}.
            This way, the whole polytope becomes the {'{'}5, 5/2, 3{'}'}.

            We construct brand new edges.
            This polytope is in the second generation stellated 120-cells,
            after {'{'}5, 3, 5/2{'}'} and {'{'}5/2, 5, 5/2{'}'}.
            It is analogous to the first generation counterpart, {'{'}5, 5/2, 5{'}'}.
            </div>
            <br/>
            <div>
            When we stellate {'{'}5/2, 5, 5/2{'}'} to get {'{'}5, 5/2, 3{'}'},
            we modified each cell and each face without creating new elements. The cell and face
            counts remain the same: 120 and 720, respectively.

            The old edges are abandoned and new edges are constructed. 
            There are the same number
            of edges per cell (30). However, previously each edge is shared by 5 cells. Now, 
            each edge is shared by 3 cells. 
            The number of edges increases to 5/3 of the preivous count, 
            from 720 to 1200.

            The vertices are reused. 
            The number of vertices remains 120.

            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5/2, 5, 5/2{'}'}: the small stellated dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5, 5/2, 3{'}'}: the great dodecahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:

            In the vertex first projection of the 600-cell, we can see 12 points on the outside
            where five edges meet. They are highlighted in the first image below. They are the
            "low altitude" vertices of the northern hemisphere.
            They are also the 12 vertices of an icosahedron.

            When you construct a great dodecahedron using these 12 vertices,
            you get a cell in {'{'}5, 5/2, 3{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_alternative_polytope_3_3_5_cell600_low_alt.png')} alt = 'static'/>
                <figcaption>The 12 highlighted vertices of the 600-cell form an icosahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Inscribe a great dodecahedral cell in the icosahedron</figcaption>
            </figure>
            </div>
            </li>
            </ul>


            <h4>Structure</h4>
            <div>
            In this section, let us start from the center vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator. 
            The adjacency relation of the cells is different from the 120-cell.
            It is as same as the relation in {'{'}5, 3, 5/2{'}'} and {'{'}5/2, 5, 5/2{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            The 12 cells in Layer 4 meet at the north pole.
            Just like in {'{'}5, 3, 5/2{'}'} and {'{'}5/2, 5, 5/2{'}'},
            the Layer 4 (low latitude) cells
            in the <strong>southern</strong> hemisphere are 
            adjacent to the north cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>
            <div>
            Finally, here is the exploded view of the whole polytope.
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5,5/2,3}"/>


            <h4>Comparison with {'{'}5, 5/2, 5{'}'}</h4>
            <div>
            Just like in previous second generation stellations,
            in the exploded view of {'{'}5, 5/2, 3{'}'}, you can see at certain point, 
            the cells were arranged just like in {'{'}5, 5/2, 5{'}'}.

            In the visualization above using vZome, if you set the 
            "explode / Implode" slider to 16, you see the unexploded
            projection of {'{'}5, 5/2, 5{'}'}. You can use two windows
            to compare this polytope {'{'}5, 5/2, 3{'}'} with explode factor = 16 
            and {'{'}5, 5/2, 5{'}'} with explode factor = 0.
            </div>
            <br/>
            <div>
            Here are the exploded views of Layer 2 for comparison.
            </div>         
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5, 5/2, 3{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5, 5/2, 5{'}'}</figcaption>
            </figure>
            </div>

            <div>
            Below are the animations showing the partial 
            explosion of {'{'}5, 5/2, 3{'}'} until it becomes {'{'}5, 5/2, 5{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_diff_shapes_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view of Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_diff_shapes_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view of all layers</figcaption>
            </figure>
            </div>

            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/vertex_figure_polytope_5_52_3.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 12 great dodecahedra meet. Each great dodecahedron brings 
            a pentagram to the vertex figure of the polytope. 
            The vertex figure is a great stellated dodecahedron.
            The 12 cells meeting at a vertex, for example,
            the north pole, are the cells in Layer 4.
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great grand 120-cell {'{'}5, 5/2, 3{'}'} </span>);
  }
}

export default Polyhedron_5_52_3;

