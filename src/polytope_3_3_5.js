import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The 600-cell is another convex regular polytope in 4D. 
            The Schläfli symbol is {'{'}3, 3, 5{'}'}.
            The first two numbers of the Schläfli symbol 
            are {'{'}3, 3{'}'}, which are the symbol of each cell (the tetrahedron).
            The third number of the Schläfli symbol, 5, is the number of cells around each edge.
            The last two numbers of the Schläfli symbol, {'{'}3, 5{'}'}, give us the vertex figure 
            (the icosahedron). The 600-cell can be considered as the equivalent of
            the icoahedron in 4D. 
            </div>
            <br/>
            <div>
            The 600-cell contains 600 tetrahedral cells, 1200 triangular faces, 
            720 edges, and 120 vertices. More information can be found in            
            the <a href="https://en.wikipedia.org/wiki/600-cell" target="_blank" rel="noopener noreferrer">wikipedia page</a> and
            the <a href="http://eusebeia.dyndns.org/4d/600-cell" target="_blank" rel="noopener noreferrer">Eusebeia page</a>.
            </div>

            <h4 id="duality">Duality</h4>
            <div>
            The 600-cell is the dual polytope of the <Link to='/Polytope_5_3_3'>120-cell</Link>.
            The Schläfli symbol {'{'}3, 3, 5{'}'} is the reverted list of
            that of the 120-cell {'{'}5, 3, 3{'}'}. The cell centers and vertices of one polytope are the vertices and the cell centers
            of the dual, respectively. The face centers and edge centers of one polytope are 
            the edge centers and the face centers of the dual, respectively.
            </div>

            <h4 id="projection">Projection</h4>
            <div>
            For the 120-cell, we looked at the cell-first projection. Because of the duality, a cell in the 120-cell is a vertex 
            in the 600-cell. We will look at the vertex-first projection of the 600-cell. The vertices of the 600-cell 
            have the same structure as the cells of the 120-cell.
            The vertex-first projection of the 600-cell to 3D also has an icosahedral symmetry.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_whole_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>Vertex-first projection of 600-cell {'{'}3, 3, 5{'}'}</figcaption>
            </figure>
            </div>



            <h4 id="structure">Structure</h4>
            <div>
            In this section, let us start from the centered vertex and see how the other cells are arranged, layer by layer.

            Following the terminology from the <Link to='/Polytope_5_3_3'>120-cell</Link>, I 
            call the centered vertex in projection the "north pole".
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 1</figcaption>
            </figure>
            </div>

            <div>
            Layer 1: 
            Around the north pole, we have the first layer of 20 tetrahedral cells. 
            They are arranged as the faces of an icosahedron.
            Combining the first layer, the whole shape is an icosahedron. 
            All the points on the surface of the icosahedron have the same value 
            in the fourth dimension that we lose due to projection.
            The north pole has a different value in the fourth dimension. 
            Each cell connects a face of the icosahedron to the north pole.
            The Layer 1 cells form a 4D pyramid with the 
            icosahedron as the base and the north pole as the apex.

            This structure is analogous
            to the pentagonal pyramid on top of the <Link to='/Polyhedron_3_5#north'>icosahedron</Link>. 
            Since these cells surround a vertex, the icosahedron here is also the 
            vertex figure of the 600-cell. The 12 vertices of this icosahedron are the neighbors of the centered vertex.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>
            <div>
            Layer 2: We attach 20 more cells to the 20 outer faces of Layer 1.
            </div>
            <br/>
            <div>
            Layer 3: We attach 30 more cells to bridge the gaps from the Layer 2 cells. They 
            are in the positions of the edges of an icosahedron.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            <div>
            Layer 4: After the first 3 layers, the outer shape of the projection is a dodecahedron with 
            concave faces. In Layer 4, we use 5 tetrahedra to fill in each concave face to make them convex. 
            There are 5 * 12 = 60 cells in this layer.
            These 4 layers include all the cells surrounding the centered vertex and its neighboring vertices.
            </div>
            <br/>
            <div>
            Layer 5: After the first 4 layers, the outer shape of the projection is a dodecahedron with
            convex faces. Think of them as 12 peaks. Between each pair of neighboring peaks, 
            we use two tetrahedra to form a "ridge" to connect them. There are 2 * 30 = 60 cells in this layer.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_6_6.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 6</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_7_7.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 7</figcaption>
            </figure>            
            </div>
            <div>
            Layer 6: After the first 5 layers, the outer shape of the projection is an icosahedron with
            concave faces. We use 3 tetrahedra to fill in each concave face. There are 3 * 20 = 60 cells in this layer.
            </div>
            <br/>
            <div>
            Layer 7: We have 20 small pits after the first 6 layers. We use 20 cells to fill in.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_8_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 8</figcaption>
            </figure>
            </div>
            <div>
            Layer 8: These are the equator cells. The projections are flat, because the cells lie in 
            hyperplanes perpendicular to the direction of projection.
            They are arranged
            in groups of 5 cells. Each group looks like a pentagon on 
            an <a href="https://en.wikipedia.org/wiki/Icosidodecahedron" target="_blank" rel="noopener noreferrer">Icosidodecahedron</a> with
            convex pentagonal faces.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_1_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <div>
            So far we have seen 8 layers of cells, from the north pole to the equator. The counts of the first 7 layers are
            20, 20, 30, 60, 60, 60, 20. They belong to the northern hemisphere. The total is 270. There are 270 other cells in 
            the southern hemisphere. Layer 8 contains 60 cells, and they form the equator. Therefore the total number of cells
            is 270 * 2 + 60 = 600.
            </div>

            <ObservableEmbed name="{3,3,5}"/>

            <h4 id="vertex">Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/vertex_figure_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_vertex_explode.gif')} alt = 'static'/>
                <figcaption>20 cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            The vertex figure of the 600-cell can be directly seen in the first layer of the cells. See the figure 
            above for a wireframe view of it.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 600-cell {'{'}3, 3, 5{'}'} </span>);
  }
}

export default Polyhedron_3_3_5;

