import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
            <div>
            The star polytope with 
            the Schläfli symbol {'{'}3, 5, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Icosahedral_120-cell" 
                target="_blank" rel="noopener noreferrer">icosahedral 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}3, 5{'}'}, aka the <Link to='/Polyhedron_3_5'>icosahedon</Link>.
            There are 120 cells, 1200 pentagonal faces, 720 edges, and 120 vertices in total.
            </div>
        </div>
        );

    this.state.content = (
    	<div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
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
            Then, we take the convex hull of each cell 
            to construct an icosahedral cell, {'{'}3, 5{'}'}.
            The result is the {'{'}3, 5, 5/2{'}'}.
            We construct brand new faces in this process.
            </div>
            <br/>
            <div>
            Let's see how the stellation process affects the number of cells, faces, edges, and vertices.
            
            Since each cell {'{'}5, 5/2{'}'} of the {'{'}5, 5/2, 5{'}'} becomes {'{'}3, 5{'}'},
            the number of cells remains the same: 120. 

            The old faces are abandoned. All the faces are new. The new number of faces is 20 * 120 / 2 = 1200.

            All the edges and vertices of {'{'}5, 5/2, 5{'}'} are reused in the new polytope. 
            The numbers of edges and vertices remain
            the same: 720 and 120, respectively.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}5, 5/2, 5{'}'} is a great dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}3, 5, 5/2{'}'} is a regular icosahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:
            Recall that the first layer of the 600-cell forms a 4D pyramid with 
            an icosahedral base. That is, the projection of these cells is an icosahedron.

            Use this icosahedron as a cell, and you get a cell in {'{'}5, 5/2, 5{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>The first layer of the 600-cell forms an icosahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
                <figcaption>Directly use this icosahedron as a cell of {'{'}3, 5, 5/2{'}'}</figcaption>
            </figure>

            </div>

            </li>
            </ul>


            <h4 id="structure">Structure</h4>
            <div>
            In this section, let us start from the centered cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator. However, the adjacency relation 
            among the cells is different from the 120-cell.
            </div>



            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            </div>

            <div>
            The above animation is the exploded view of the second layer. Unlike the previously discussed
            polytopes <Link to='/Polytope_5_3_3'>{'{'}5, 3, 3{'}'} (the 120-cell)</Link>, <Link to='/Polytope_5_52_5'>{'{'}5, 5/2, 5{'}'}</Link>, <Link to='/Polytope_52_5_3'>{'{'}5/2, 5, 3{'}'}</Link>,
            and <Link to='/Polytope_52_3_5'>{'{'}5/2, 3, 5{'}'}</Link>,
            in this polytope, 
            the Layer 1 "north cell" and a cell in Layer 2 do <strong>not</strong> meet on a face. 
            They intersect with each other without sharing a face.
            In this sense, they are topologically not adjacent although geometrically they are close by.
            
            This is a property of the new faces in this polytope.

            A pair of cells in Layer 2 that are not the closest but second-most closest meet on a face.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            The above animation is the exploded view of the third layer. 
            The Layer 1 "north cell" and a cell in Layer 3 <strong>do</strong> meet on a face.
            There are 20 cells in Layer 3. They touch the north cell on its 20 faces.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>
            Two closest cells in Layer 4 meet with each other on a face.
            Finally the exploded view of the whole polytope.
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,5,5/2}"/>

            <h4 id="vertex">Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/vertex_figure_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 12 icosahedra meet. Each icosahedron brings 
            a pentagon to the vertex figure of the polytope. 
            The vertex figure is a great dodecahedron, which has 12 intersecting pentagonal faces.
            The 12 cells meeting at the north pole are the Layer 2 cells. 
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Icosahedral 120-cell {'{'}3, 5, 5/2{'}'} </span>);
  }
}

export default Polyhedron_3_5_52;

