import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_52_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
           <div>
            The polytope with 
            the Schläfli symbol {'{'}5/2, 3, 5{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_stellated_120-cell" 
                target="_blank" rel="noopener noreferrer">Great stellated 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5/2, 3{'}'}, aka the <Link to='/Polyhedron_52_3'>great stellated dodecahedron</Link>.
            There are 120 cells, 720 faces, 720 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 3, 5{'}'}</figcaption>
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

            Then, we extend its edges to stellate each cell 
            to construct a great stellated dodecahedron.
            This way, we have a {'{'}5/2, 3, 5{'}'}.
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.

            Compared with {'{'}5, 5/2, 5{'}'}, each cell is changed from a {'{'}5, 5/2{'}'} to 
            a {'{'}5/2, 3{'}'}. The number of cells remains the same: 120.

            Each face is changed from a pentagon to a pentagram. The number of faces remain the same: 720.

            All the edges only got longer. The number of edges remains
            the same: 720.

            Extending edges creates new vertices. But it happens that the number of new vertices is as same
            as before, 120.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5, 5/2, 5{'}'}: the great dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
                <figcaption>Extending edges of the great dodecahedron</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5/2, 3, 5{'}'}: the great stellated dodecahedron</figcaption>
            </figure>
            </div>


            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            
            Recall that the projection of the first 3 layers of the 600-cell forms a
            dodecahedron with concave faces. If we use the 20 vertices of this dodecahedron
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


            <h4>Structure</h4>
            <div>
            In this section, let us start from the center vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator.
            </div>
            <br/>
            <div>
            Each pair of adjacent cells in 120-cell corresponds to a pair of 
            adjacent cells in this star polytope. Here, the pair of cells intersect 
            with each other and
            the tips go into each other. However, they still meet at a pentagrammic face,
            whose center is located at the same point as the pentagonal face in the 120-cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>
            Each cell is spiky, and they cross each other heavily when they meet. 
            The adjacent cells 
            touch each other on the pentagrammic faces. The adjacency relation is as same as 
            the 120-cell. Each Layer 2 cell touches the center "north cell". Two close by 
            Layer 2 cells also touch each other. In the animation of exploded Layer 2, you
            can see two tips pointing towards us. When the cells meet, these two tips touch
            and create a thicker tip.

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/polytope_52_3_5_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
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

            <h4>Vertex figure</h4>
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
            a trigular prism. The 20 cells meeting at a vertex, for example,
            the north pole, are the third layer cells.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Great stellated 120-cell {'{'}5/2, 3, 5{'}'} </span>);
  }
}

export default Polyhedron_52_3_5;

