import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_3_3 extends App {
  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
            <div>
            The 120-cell is a convex regular polytope in 4D. 
            The Schläfli symbol is {'{'}5, 3, 3{'}'}.
            The first two numbers of the Schläfli symbol 
            are {'{'}5, 3{'}'}, which form the symbol of each cell (the dodecahedron).
            The third number of the Schläfli symbol, 3, is the number of cells around each edge.
            The last two numbers of the Schläfli symbol, {'{'}3, 3{'}'}, give us the vertex figure 
            (the tetrahedron). The 120-cell can be considered as the equivalent of
            the dodecahedron in 4D.
            </div>
            <br/>
            <div>
            Overall, the 120-cell contains 120 dodecahedral cells, 720 pentagonal faces, 
            1200 edges, and 600 vertices. More information can be found in            
            the <a href="https://en.wikipedia.org/wiki/120-cell" target="_blank" rel="noopener noreferrer">wikipedia page</a> and
            the <a href="http://eusebeia.dyndns.org/4d/120-cell" target="_blank" rel="noopener noreferrer">Eusebeia page</a>.
            </div>
        </div>
        );

    this.state.content = (
    	<div>
            <h4 id="projection">Projection</h4>
            <div>
            To understand the structure of the 4D polytopes, 
            we heavily rely on projecting them to 3D, which is a space we are familiar with.
            The best projection I find for the 120-cell is cell-first. This means in the projection,
            we have a cell in the middle. The centered cell is not distorted and all the other cells 
            are distorted because the direction of the projection is at an angle of the cells.
            This is analogous to the face-first projection of 
            the <Link to='/Polyhedron_5_3'>dodecahedron</Link> to 2D, with a pentagon in the middle.
            See the pictures below to compare these two projections.
            The projection of the dodecahedron to 2D has a 5-fold rotational symmetry. 
            The projection of the 120-cell to 3D has an icosahedral symmetry.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/pov_whole_polytope_5_3_3_cell120.png')} alt = 'static'/>
                <figcaption>Cell-first projection of the 120-cell {'{'}5, 3, 3{'}'} to 3D</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/Dodecahedron/pov_north_pole_whole_Dodecahedron.png')} alt = 'static'/>
                <figcaption>Face-first projection of the dodecahedron to 2D</figcaption>
            </figure>
            </div>

            <h4 id="structure">Structure</h4>
            <div>
            The first image above packs 120 dodecahedra together. We cannot really see the structure from this picture.
            In this section, we start from the center cell and see how the other cells are arranged, layer by layer.

            Following the terminology from the <Link to='/Polyhedron_5_3'>dodecahedron page</Link>, I 
            call the centered cell in projection the "north cell". 
            Its center is the north pole of the 4D polytope, and the center of this projection.
            This single cell is the core, or Layer 1 of the projection.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            </div>

            <div>
            Layer 2: Around the centered cell, there are 12 slightly distorted dodecahedra, touching the 12 faces of the center cell.
            The centers of these 12 cells form the vertices of an icosahedron. They form Layer 2. The Eusebeia page calls them
            the "arctic circle" because they are close to the north pole.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            Layer 3: After placing the Layer 2 cells, we can see small pits at the places where every three Layer 2 cells meet. 
            There
            are 20 such pits. We can fit 20 cells in them. They are the Layer 3 cells. They are in the middle 
            between the north pole
            and the equator. Therefore they are the "middle latitude" cells. The centers of them form the vertices of 
            a dodecahedron.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            </div>

            <div>
            Layer 4: After placing the Layer 3 cells, we then see small pits with the pentagonal shape. 
            We fit 12 cells there. They are the Layer 4 cells. 
            They are directly on "top" of the Layer 1 cells, meaning that 
            if you connect the origin and a Layer 1 cell center, and extend the line, it will pass 
            the center of a Layer 4 cell. 
            Just like Layer 2, the centers of Layer 4 cells form the vertices of an icosahedron.
            They are in the "low latitude" of the polytope.
            </div>


            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            <div>
            Layer 5: After placing the Layer 4 cells, there is actually no pit on the surface like before.
            The layer 5 cells are completely flat under this projection. These 30 cells are in the hyperplanes 
            perpendicular to the direction of the projection. They are centered on the "equator" of the polytope.
            The centers of these cells are the edge centers of the regular dodecahedron or the regular icosahedron.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <div>
            So far we have seen 5 layers of cells, from the north pole to the equator. The counts of the cells are
            1, 12, 20, 12, and 30. If we continue to the southern hemi-hypersphere, we see the same layers with
            12, 20, 12, and 1 cell. They add up to the total of 120 cells. 
            </div>

            <ObservableEmbed name="{5,3,3}"/>

            <h4 id="vertex">Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/vertex_figure_polytope_5_3_3_cell120.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_vertex_explode.gif')} alt = 'static'/>
                <figcaption>4 cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            The definition of the <a href="https://en.wikipedia.org/wiki/Vertex_figure" target="_blank" rel="noopener noreferrer">vertex figure</a> for a 4D polytope is similar to the one for 3D polyhedra, as we introduced in 
            the <Link to='/Polyhedron_5_3#vertex'>dodecahedron page</Link>. We use a hyperplane to slice off a vertex 
            of the polytope to truncate the nearby cells and
            create a new polyhedron. This new polyhedron is the vertex figure.
            </div>
            <br/>
            <div>
            In the 120-cell, there are 4 dodecahedral cells around each vertex. The cutting hyperplane
            intersects with these four cells and generates 4 faces for the new polyhedron. 
            The intersection of the cutting hyperplane and a dodecahedral cell is a triangle.
            Therefore, the vertex figure is a tetrahedron.
            One can directly get the Schläfli symbol of the vertex figure from the last two numbers {'{'}3, 3{'}'} from
            the Schläfli
            symbol of the whole polytope, {'{'}5, 3, 3{'}'}.
            </div>

            <h4 id="edge">Edge figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/edge_explode_polytope_5_3_3_cell120_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Cells meeting at an edge</figcaption>
            </figure>
            </div>

            <div>
            Similar to the vertex figure describing how cells surround a vertex, we can also talk about
            the <a href="https://en.wikipedia.org/wiki/Vertex_figure#Edge_figure" target="_blank" rel="noopener noreferrer">edge figure</a>.
            It is a 2D polygon describing how cells surround an edge. It can be seem from the last number of the Schläfli symbol.
            Technically, the edge figure is the vertex figure of the vertex figure.
            </div>
            <br/>
            <div>
            The Schläfli symbol of the 120-cell is {'{'}5, 3, 3{'}'}. The edge figure is {'{'}3{'}'}, a triangle.
            If you connect the centers of the three cells incident to the given edge, you get this equilateral triangle.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 120-cell {'{'}5, 3, 3{'}'} </span>);
  }
}

export default Polyhedron_5_3_3;

