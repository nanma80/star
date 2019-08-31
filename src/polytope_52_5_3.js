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
            dodecahedron {'{'}5/2, 5{'}'} by extending the edges until they meet. The whole polytope is changed from
            {'{'}5, 3, 3{'}'} into {'{'}5/2, 5, 3{'}'}. The last number, 3, is not changed because the number of cells
            around each edge (3) is not change. Each edge only gets longer. 
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
            [to be completed]
            </li>
            </ul>


            <h4>Structure</h4>
            <div>
            In this section, let us start from the center vertex and see how the other cells are arranged, layer by layer.

            All the cells here directly correspond to the cells of the 120-cell. They have the same layers of 1, 12, 20, 12, and 30 cells
            in the northern hemisphere and the equator.
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
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> {'{'}5/2, 5, 3{'}'} </span>);
  }
}

export default Polyhedron_52_5_3;

