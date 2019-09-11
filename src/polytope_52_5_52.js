import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_52_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The star polytope with 
            the Schläfli symbol {'{'}5/2, 5, 5/2{'}'} is
            a <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytope</a>.
            It is also
            called the <a href="https://en.wikipedia.org/wiki/Grand_stellated_120-cell" target="_blank" rel="noopener noreferrer">grand stellated 120-cell</a>.
            </div>
            <br/>
            <div>
            Each cell is a {'{'}5/2, 5{'}'}, aka the <Link to='/Polyhedron_52_5'>small stellated dodecahedron</Link>.
            There are 120 cells, 720 pentagrammic faces, 720 edges, and 120 vertices in total.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/pov_whole_polytope_52_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 5/2{'}'}</figcaption>
            </figure>
            </div>


            <h4>Construction</h4>
            <ul>
            <li>
            <div>
            Stellation from the <Link to='/Polytope_5_3_3'>120-cell</Link>:

            Previously, to construct the <Link to='/Polytope_52_5_3'>small stellated 120-cell {'{'}5/2, 5, 3{'}'}</Link>,
            we extended the edges of the 120-cell so that each cell was changed from 
            the regular dodecahedron {'{'}5, 3{'}'} to the small stellated dodecahedron {'{'}5/2, 5{'}'}.
            </div>
            <br/>
            <div>
            In the previous page, we constructed 
            another polytope where each cell is a regular dodecahedron:
            the <Link to='/Polytope_5_3_52'>grand 120-cell {'{'}5, 3, 5/2{'}'}</Link>.
            We can apply the same trick we did to the 120-cell to the grand 120-cell.
            Specifically, we extend the edges of the grand 120-cell 
            so that each cell is changed from 
            the regular dodecahedron to the small stellated dodecahedron.
            The whole polytope is changed
            from {'{'}5, 3, 5/2{'}'} into {'{'}5/2, 5, 5/2{'}'}.
            </div>
            <br/>
            <div>
            Since we just started another stellation process based on dodecahedral cells,
            I view {'{'}5, 3, 5/2{'}'} and {'{'}5/2, 5, 5/2{'}'} as
            the "second generation" of stellated 120-cell.
            The corresponding "first generation" polytopes are 
            the 120-cell {'{'}5, 3, 3{'}'} and {'{'}5/2, 5, 3{'}'}.
            We will continue the same stellation process from the first generation 
            and construct more
            second generation polytopes.
            </div>
            <br/>
            <div>
            When we stellated {'{'}5, 3, 5/2{'}'} to get {'{'}5/2, 5, 5/2{'}'},
            we did not create or discard any cell, face, or edge. The counts of these
            elements remain the same.
    
            New vertices got created. They still coincide with those
            of the 600-cell. Therefore the vertex count doesn't change: 120.
            </div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}5, 3, 5/2{'}'} is a dodecahedron</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>Each cell of {'{'}5/2, 5, 5/2{'}'} is a small stellated dodecahedron</figcaption>
            </figure>
            </div>

            </li>
            <li>
            Faceting from the <Link to='/Polytope_3_3_5'>600-cell</Link>:

            In the vertex first projection of the 600-cell, we can see 12 points on the outside
            where five edges meet. They are highlighted in the first image below. They are the
            "low latitude" vertices of the northern hemisphere.
            They are also the 12 vertices of an icosahedron.

            When you construct a small stellated dodecahedron using these 12 vertices,
            you get a cell in {'{'}5/2, 5, 5/2{'}'}.
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_alternative_polytope_3_3_5_cell600_low_alt.png')} alt = 'static'/>
                <figcaption>The 12 highlighted vertices of the 600-cell form an icosahedron</figcaption>
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
            In this section, let us start from the centered cell and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. 
            The adjacency relation of the cells is different from the 120-cell.
            It is as same as the relation in {'{'}5, 3, 5/2{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 3</figcaption>
            </figure>
            </div>

            <div>
            Just like in {'{'}5, 3, 5/2{'}'},
            the Layer 2 and Layer 3 cells go deep into the north cell and 
            and intersect with it.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 4</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: Layer 5</figcaption>
            </figure>
            </div>

            <div>
            The 12 cells in Layer 4 meet at the north pole.
            Since the adjacency relation among the cells is as same as
            in {'{'}5, 3, 5/2{'}'},
            the Layer 4 (low latitude) cells centered
            in the <strong>southern</strong> hemisphere are 
            adjacent to the north cell,
            which means they share pentagrammic faces with the north cell.            
            </div>
            <br/>
            <div>
            Finally, here is the exploded view of the whole polytope.
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{5/2,5,5/2}"/>

            <h4>Comparison with {'{'}5/2, 5, 3{'}'}</h4>
            <div>
            There are obvious similarities between {'{'}5/2, 5, 5/2{'}'} and {'{'}5/2, 5, 3{'}'}.
            The cells are all {'{'}5/2, 5{'}'}.
            They play the same role in the first and second generation of stellated 120-cells.

            In the exploded view of {'{'}5/2, 5, 5/2{'}'}, you can see at certain point, 
            the cells are arranged just like in {'{'}5/2, 5, 3{'}'}.

            This is as same as the relationship between {'{'}5, 3, 5/2{'}'} and 
            the 120-cell discussed in the previous page.

            In the visualization above using vZome, if you set the 
            "explode / Implode" slider to 16, you see the unexploded
            projection of {'{'}5/2, 5, 3{'}'}. You can use two windows
            to compare this polytope {'{'}5/2, 5, 5/2{'}'} with explode factor = 16 
            and {'{'}5/2, 5, 3{'}'} with explode factor = 0.
            </div>
            <br/>
            <div>
            Here are the exploded views of Layer 2 for comparison.
            </div>            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5/2, 5, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded Layer 2 of {'{'}5/2, 5, 3{'}'}</figcaption>
            </figure>
            </div>

            <div>
            Below are the animations showing the partial 
            explosion of {'{'}5/2, 5, 5/2{'}'} until it becomes {'{'}5/2, 5, 3{'}'}.
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_diff_shapes_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view of Layer 2</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_diff_shapes_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view of all layers</figcaption>
            </figure>
            </div>


            <h4>Vertex figure</h4>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/vertex_figure_polytope_52_5_52.png')} alt = 'static'/>
                <figcaption>Vertex figure</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_vertex_explode.gif')} alt = 'static'/>
                <figcaption>Cells meeting at a vertex</figcaption>
            </figure>
            </div>

            <div>
            Each vertex is where 12 small stellated dodecahedra meet. 
            The vertex figure is a great dodecahedron, 
            which has 12 intersecting pentagonal faces.
            The 12 cells meeting at the north pole are Layer 4 cells. 
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Grand stellated 120-cell {'{'}5/2, 5, 5/2{'}'} </span>);
  }
}

export default Polyhedron_52_5_52;

