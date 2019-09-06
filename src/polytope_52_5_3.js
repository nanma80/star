import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_52_5_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The polytope with 
            the Schläfli symbol {'{'}5/2, 5, 3{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Small_stellated_120-cell" target="_blank" rel="noopener noreferrer">Small stellated 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5/2, 5{'}'}, aka the <Link to='/Polyhedron_52_5'>small stellated dodecahedron</Link>.
            There are 120 cells, 720 pentagrammic faces, 1200 edges, and 120 vertices.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/pov_whole_polytope_52_5_3.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 3{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            On the 120-cell, we stellate each cell from the dodecahedron {'{'}5, 3{'}'} to form a small stellated 
            dodecahedron {'{'}5/2, 5{'}'} by extending the edges until they meet. The whole polytope is changed
            from {'{'}5, 3, 3{'}'} into {'{'}5/2, 5, 3{'}'}. The last number, 3, is not changed because the number of cells
            around each edge (3) is not change. Each edge only gets longer. 
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.
            
            Since each cell of the 120-cell {'{'}5, 3{'}'} becomes {'{'}5/2, 5{'}'},
            the number of cells remains the same: 120. 

            Since each face of the 120-cell {'{'}5{'}'} becomes {'{'}5/2{'}'}, the number of faces 
            remains the same: 720.

            Since each edge gets longer, the number of edges 
            remains the same: 1200.

            The vertices of the 120-cell are all abandoned. The new vertices coincide with those
            of the 600-cell. There are 120 new vertices.

            </div>
            <br/>
            <div>
            This polytope is called the first stellation of the 120-cell. It is the 4D analog of the small stellated dodecahedron,
            which is the first stellation of the dodecahedron in 3D. Both are constructed by simply extending the edges.
            </div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in the 120-cell: dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5/2, 5, 3{'}'}: small stellated dodecahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            Recall that the first layer of the 600-cell forms a 4D pyramid with 
            an icosahedral base. That is, the projection of these cells is an icosahedron.

            When you inscribe a small stellated dodecahedron 
            in the icosahedron using the same vertices, 
            you get a cell in {'{'}5/2, 5, 3{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>The first layer of the 600-cell forms an icosahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Use the vertices of the icosahedron to create a cell</figcaption>
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
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>
            <div>
            You can see each cell in Layer 2 meets with the center "north cell". The pentagrammic faces
            touch and the tips penetrate into the other cells.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>

            Finally the exploded view of the whole polytope.
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5/2,5,3}"/>

            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/vertex_figure_polytope_52_5_3.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>
            <div>
            When we construct the {'{'}5/2, 5, 3{'}'} by stellating the 120-cell,
            we know that the extension of 12 cells meet at one point
            to create a new vertex. The vertex figure is a dodecahedron. Each
            pentagonal face corresponds to the extension of a cell.
            The 12 cells meeting at a vertex, for example,
            the north pole, are the second layer cells. 

            In the projection, they all 
            cross the north cell and meet at the center (north pole). 
            In fact,
            the vertex they meet at is "above" the north cell, where the 
            word "above" means having a larger value in the 
            4th dimension that disappears in the projection.
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span>Small stellated 120-cell {'{'}5/2, 5, 3{'}'} </span>);
  }
}

export default Polyhedron_52_5_3;

