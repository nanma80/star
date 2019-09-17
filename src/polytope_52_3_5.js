import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_52_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
           <div>
            The star polytope with 
            the Schläfli symbol {'{'}5/2, 3, 5{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_stellated_120-cell" 
                target="_blank" rel="noopener noreferrer">great stellated 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5/2, 3{'}'}, aka the <Link to='/Polyhedron_52_3'>great stellated dodecahedron</Link>.
            There are 120 cells, 720 faces, 720 edges, and 120 vertices in total.
            </div>
        </div>
        );

    this.state.content = (
    	<div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 3, 5{'}'}</figcaption>
            </figure>
            </div>


            <h4 id="construction">Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell to get the <Link to='/Polytope_5_52_5'>
            great 120-cell, {'{'}5, 5/2, 5{'}'}</Link>, where each cell is
            a great dodecahedron, {'{'}5, 5/2{'}'}.

            Then, we extend its edges to stellate each cell 
            to construct a great stellated dodecahedron, {'{'}5/2, 3{'}'}.
            The result is a {'{'}5/2, 3, 5{'}'}.
            </div>
            <br/>
            <div>
            Compared with {'{'}5, 5/2, 5{'}'}, each cell is changed from a {'{'}5, 5/2{'}'} to 
            a {'{'}5/2, 3{'}'}. The number of cells remains the same: 120.

            Each face is changed from a pentagon to a pentagram. The number of faces remain the same: 720.

            All the edges only get longer. The number of edges remains
            the same: 720.

            Extending edges creates new vertices. The number of new vertices happens to be as same
            as before, 120.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}5, 5/2, 5{'}'} is a great dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
                <figcaption>Extending edges of the great dodecahedron</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}5/2, 3, 5{'}'} is a great stellated dodecahedron</figcaption>
            </figure>
            </div>


            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            
            Recall that the projection of the first 3 layers of the 600-cell forms a
            dodecahedron with concave faces. If we take the 20 vertices of this dodecahedron
            and construct a great stellated dodecahedron, we get a cell of {'{'}5/2, 3, 5{'}'}.
            These vertices are the "middle latitude vertices" of the 600-cell.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_3_3.gif')} alt = 'static'/>
                <figcaption>The first 3 layers of the 600-cell, with the third layer exploded</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Use the 20 vertices to form the great stellated dodecahedron</figcaption>
            </figure>

            </div>

            </li>
            </ul>

            <h4 id="intersecting">Intersecting cells</h4>
            <div>
            Each pair of adjacent cells in 120-cell corresponds to a pair of 
            adjacent cells in this star polytope. Here, the pair of cells intersect 
            with each other heavily and
            the tips go into each other. Some tips even 
            cross the other one and go out from the other side.
            However, they still meet at a pentagrammic face,
            which shares the center with a pentagonal face in the 120-cell.

            In this animation, we show the common face using red edges, and explode the two
            adjacent cells away from each other.
            </div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/face_explode_polytope_52_3_5_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Adjacent cells intersect with each other and meet on a face
                </figcaption>
            </figure>
            </div>



            <h4 id="structure">Structure</h4>
            <div>
            In this section, let us start from the centered cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>
            Each Layer 2 cell touches the center "north cell". Two adjacent 
            Layer 2 cells also touch each other. In the animation of exploded Layer 2, you
            can see two tips pointing towards us. When the cells meet, these two tips touch
            and create a thicker tip.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            Finally the exploded view of the whole polytope.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5/2,3,5}"/>

            <h4 id="vertex">Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/vertex_figure_polytope_52_3_5.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>
            <div>
            From the Schläfli symbol we know the vertex figure is {'{'}3, 5{'}'}.
            Each triangular face corresponds to a tip of the cell, which is
            a trigular prism. The 20 cells meeting at the north pole are the Layer 3 cells.
            </div>

            <h4 id="edge">Edge figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/edge_explode_polytope_52_3_5_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Cells meeting at an edge</figcaption>
            </figure>
            </div>

            <div>
            Since the Schläfli symbol is {'{'}5/2, 3, 5{'}'},
            the edge figure is {'{'}5{'}'}.
            As the animation above shows, five cells surround an edge as 
            the vertices of 
            a regular pentagon.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated 120-cell {'{'}5/2, 3, 5{'}'} </span>);
  }
}

export default Polyhedron_52_3_5;

