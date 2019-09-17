import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
           <div>
            The star polytope with 
            the Schläfli symbol {'{'}5, 3, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Grand_120-cell" 
                target="_blank" rel="noopener noreferrer">grand 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5, 3{'}'}, aka the <Link to='/polyhedron_5_3'>dodecahedron</Link>.
            There are 120 cells, 720 faces, 720 edges, and 120 vertices in total.
            </div>
        </div>
        );

    this.state.content = (
    	<div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/pov_whole_polytope_5_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}5, 3, 5/2{'}'}</figcaption>
            </figure>
            </div>

            <h4 id="construction">Construction</h4>
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
            Compared with {'{'}5/2, 3, 5{'}'}, each cell is replaced by its convex hull. 
            The number of cells remains the same: 120.

            Faces and edges are new. The counts are both 720.

            Taking convex hull doesn't affect vertices. All the 
            vertices are reused, and the number of the vertices is still 120.
            </div>
            <br/>
            <div>
            Compared with the original 120-cell {'{'}5, 3, 3{'}'}, each cell in {'{'}5, 3, 5/2{'}'} is
            still a dodecahedron. But it's a bigger dodecahedron than in the 120-cell. The operation of
            replacing a cell by a larger one gives the word "grand" in the name of the "grand 120-cell".
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


            <h4 id="structure">Structure</h4>
            <div>
            In this section, let us start from the centered cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator. The adjacency relation of the cells is different from the 120-cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            Above are the views of 12 cells in Layer 2 and 20 cells in Layer 3. 
            Both layers go deep into and intersect with the "north cell". 
            The 20 cells in Layer 3 meet at a single point, the north pole.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            <div>
            Above are the views of 12 cells in Layer 4 (low latitude) and 30 cells in Layer 5 (equator). 

            Since Layer 4 cells are close enough to the equator and are big,
            a Layer 4 cell with the center in the northern hemisphere has some
            faces in the southern hemisphere. There are also the counterparts
            with centers in the southern hemisphere and some faces in the northern
            hemisphere.

            The Layer 4 cells with centers in the <strong>southern</strong> hemisphere 
            meet with the north central cell on its faces. 
            In other words, the Layer 4 (low latitude) cells
            in the southern hemisphere are adjacent to the north cell.
            Similarly, the Layer 4 cells centered in the northern hemisphere
            are adjacent to the south pole cell.
            </div>
            <br/>
            <div>
            Finally here is the exploded view of the whole polytope.
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            
            <ObservableEmbed name="{5,3,5/2}"/>

            <h4 id="comparison">Comparison with the 120-cell</h4>
            <div>
            In the exploded view, you may have seen the similarity between this star polytope and the 120-cell.
            When we explode the cells of this star polytope by moving the cells away from the center, at some point, 
            they form the 120-cell. This is because the corresponding cells are oriented in the same way as the 120-cell.
            In the visualization above using vZome, 
            if you set the "explode / Implode" slider to 32, you see the classical and unexploded
            projection of the 120-cell. You can use two windows
            to compare this polytope {'{'}5, 3, 5/2{'}'} with explode factor = 32 
            and the 120-cell with explode factor = 0.
            </div>
            <br/>
            <div>
            In the view of exploded Layer 2, in {'{'}5, 3, 5/2{'}'}, cells can overlap. In the 120-cell, cells just touch
            each other without overlapping.
            </div>            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5, 3, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of the 120-cell {'{'}5, 3, 3{'}'}</figcaption>
            </figure>
            </div>

            <div>
            Below are the animations showing the partial explosion of {'{'}5, 3, 5/2{'}'} until it becomes the 120-cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_diff_shapes_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view of Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_diff_shapes_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view of all layers</figcaption>
            </figure>
            </div>

            <div>
            We can also see the same relationship between the pentagon and the pentagram. 
            If you explode a pentagram and move the edges away from the center,
            at some point they will form the pentagon.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polygon/exploded_5_2.gif')} alt = 'static'/>
                <figcaption>Exploded pentagram</figcaption>
            </figure>
            </div>

            <h4 id="vertex">Vertex figure</h4>
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
            Each vertex is where 20 dodecahedra meet. Each dodecahedron brings 
            a triangle to the vertex figure of the polytope. 
            The vertex figure is a great icosahedron, which has 20 intersecting triangular faces.
            The 20 cells meeting at the north pole are the Layer 3 cells. 
            </div>

            <h4 id="edge">Edge figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_52/edge_explode_polytope_5_3_52_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Cells meeting at an edge</figcaption>
            </figure>
            </div>

            <div>
            Since the Schläfli symbol is {'{'}5, 3, 5/2{'}'},
            the edge figure is {'{'}5/2{'}'}.
            As the animation above shows, five cells surround an edge. 
            Similar to <Link to='/Polytope_3_5_52#edge'>{'{'}3, 5, 5/2{'}'}</Link>,
            each cell covers 2/5 of the circle
            around the edge. Each cell doesn't share a face with the closest neighbor but
            with a cell with a longer distance. This is analogous to 
            the adjacency of vertices on
            a pentagram. Indeed, the edge figure is a pentagram, {'{'}5/2{'}'}.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Grand 120-cell {'{'}5, 3, 5/2{'}'} </span>);
  }
}

export default Polyhedron_5_3_52;

