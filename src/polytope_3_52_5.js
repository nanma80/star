import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The star polytope with 
            the Schläfli symbol {'{'}3, 5/2, 5{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Great_icosahedral_120-cell" 
                target="_blank" rel="noopener noreferrer">great icosahedral 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}3, 5/2{'}'}, aka the <Link to='/Polyhedron_3_5'>great icosahedon</Link>.
            There are 120 cells, 1200 pentagonal faces, 720 edges, and 120 vertices in total.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_52_5/pov_whole_polytope_3_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5/2, 5{'}'}</figcaption>
            </figure>
            </div>

            <h4 id="construction">Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:
            We first stellate the 120-cell until we get the <Link to='/Polytope_52_5_52'>
            grand stellated 120-cell, {'{'}5/2, 5, 5/2{'}'}</Link>, where each cell is
            a small stellated dodecahedron, {'{'}5/2, 5{'}'}.
            
            Then, we reuse the edges of each cell 
            to construct a great icosahedral cell, {'{'}3, 5/2{'}'}.
            The result is the {'{'}3, 5/2, 5{'}'}.

            We construct brand new faces in this process.
            </div>
            <br/>
            <div>
            When we stellated {'{'}5/2, 5, 5/2{'}'} to get {'{'}3, 5/2, 5{'}'},
            we modified each cell without creating new cells. Hence the cell count is the same: 120. 

            We constructed new faces. The new face count is 1200.

            We reused all the edges and vertices. Therefore their counts remain the same: 720,
            and 120, respectively.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}5/2, 5, 5/2{'}'} is a small stellated dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
                <figcaption>Each cell in {'{'}3, 5/2, 5{'}'} is a great icosahedron</figcaption>
            </figure>
            </div>

            <div>
            A different way to get the great icosahedral 120-cell, {'{'}3, 5/2, 5{'}'}, 
            is to stellate from the icosahedral 120-cell, <Link to='/Polytope_3_5_52'>{'{'}3, 5, 5/2{'}'}</Link>. Each cell of {'{'}3, 5, 5/2{'}'} is 
            an icosahedron. We can stellate each icosahedron to construct a great icosahedron 
            as explained in <Link to='/Polyhedron_3_52#construction'>this page</Link>. The result is this star polytope, the great icosahedral 120-cell.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}3, 5, 5/2{'}'} is a regular icosahedron</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/Icosahedron/stellated_icosahedron.png')} alt = 'static'/>
                <figcaption>Stellating the icosahedron to form large triangular faces</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:

            In the vertex first projection of the 600-cell, we can see 12 points on the outside
            where five edges meet. They are highlighted in the first image below. They are the
            "low latitude" vertices of the northern hemisphere.
            They are also the 12 vertices of an icosahedron.

            When you construct a great icosahedron using these 12 vertices,
            you get a cell in {'{'}3, 5/2, 5{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_alternative_polytope_3_3_5_cell600_low_alt.png')} alt = 'static'/>
                <figcaption>The 12 highlighted vertices of the 600-cell form an icosahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
                <figcaption>Inscribe a great icosahedral cell in the icosahedron</figcaption>
            </figure>
            </div>
            </li>
            </ul>


            <h4 id="structure">Structure</h4>
            <div>
            In this section, let us start from the centered cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. 
            The adjacency relation of the cells is different from the 120-cell.
            It is as same as the relation in <Link to='/Polytope_3_5_52'>{'{'}3, 5, 5/2{'}'}</Link>.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            Just like in {'{'}3, 5, 5/2{'}'},
            the Layer 1 "north cell" and a cell in Layer 3 share on a face.
            There are 20 cells in Layer 3. 
            They touch the north cell (the great icosahedron) on its 20 faces.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            <div>
            The 12 cells in Layer 4 meet at the north pole.
            Finally, here is the exploded view of the whole polytope.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,5/2,5}"/>
            <div>
            The vZome model only shows the vertices and edges but not the faces.
            Since this polytope shares the same vertices and edges with {'{'}5/2, 5, 5/2{'}'},
            their models are identical.
            </div>

            <h4 id="vertex">Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_52_5/vertex_figure_polytope_3_52_5.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_52_5/polytope_3_52_5_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 12 great icosahedra meet. Each great icosahedron brings 
            a pentagram to the vertex figure of the polytope. 
            The vertex figure is a small stellated dodecahedron, 
            which has 12 intersecting pentagrams.
            The 12 cells meeting at the north pole are the cells from Layer 4.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Great icosahedral 120-cell {'{'}3, 5/2, 5{'}'} </span>);
  }
}

export default Polyhedron_3_52_5;

