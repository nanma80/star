import React from "react";
import App from './App';

class Intro4D extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <div>
        Now let us talk about the <a href="https://en.wikipedia.org/wiki/Four-dimensional_space" target="_blank" rel="noopener noreferrer">4D space</a>. 
        First, I'd like to clarify that we are not including time as a dimension. We are not talking about
        the <a href="https://en.wikipedia.org/wiki/Minkowski_space" target="_blank" rel="noopener noreferrer">Minkowski spacetime</a>, which is 
        used in relativity. In a 4D space (<strong>no time</strong>), all 4 dimensions are equivalent spatial dimensions. We 
        can talk about symmetries among all dimensions and rotate objects in all dimensions.
        </div>
        <br/>
        <div>
        In the 4D Euclidean space, there are six regular convex 
        polytopes.

        The boundaries of 4D polytopes are 3D faces called cells.
        The cells of the six regular convex polytopes are identical
        regular convex polyhedra, and all vertex figures are identical
        regular convex polyhedra.
        The 2D faces are identical convex polygons.
        The cells around each 1D edge are arranged symmetrically.
        
        These 6 polytopes are the analog of Platonic solids.

        The <a href="http://eusebeia.dyndns.org/4d/regular" target="_blank" rel="noopener noreferrer">Eusebeia website</a> has 
        a great summary of these six polytopes. Eusebeia also has
        a <a href="http://eusebeia.dyndns.org/4d/vis/vis" target="_blank" rel="noopener noreferrer">section</a> explaining
        the meaning of the 4D space and visualization by projection.
        Wikipedia also has a
        good <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_convex_4-polytopes" target="_blank" rel="noopener noreferrer">summary</a> of them.
        
        I assume that viewers of this website are comfortable 
        with 4D polytopes going forward.
        </div>
        <br/>
        <div>
        When we allow the cells and vertex figures to be regular star polyhedra, we have
        10 more regular star polytopes in 4D, known
        as the <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Regular_star_(Schl%C3%A4fli%E2%80%93Hess)_4-polytopes" target="_blank" rel="noopener noreferrer">Schläfli–Hess 4-polytopes</a>.
        They are the analog of the Kepler–Poinsot polyhedra.
        </div>


        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_52_5_3/pov_whole_polytope_52_5_3.png')} alt = 'static'/>
            <figcaption>{'{'}5/2, 5, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_5_52_5/pov_whole_polytope_5_52_5.png')} alt = 'static'/>
            <figcaption>{'{'}5, 5/2, 5{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
            <figcaption>{'{'}5/2, 3, 5{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
            <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_5_3_52/pov_whole_polytope_5_3_52.png')} alt = 'static'/>
            <figcaption>{'{'}5, 3, 5/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_52_5_52/pov_whole_polytope_52_5_52.png')} alt = 'static'/>
            <figcaption>{'{'}5/2, 5, 5/2{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_5_52_3/pov_whole_polytope_5_52_3.png')} alt = 'static'/>
            <figcaption>{'{'}5, 5/2, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_52_3_3/pov_whole_polytope_52_3_3.png')} alt = 'static'/>
            <figcaption>{'{'}5/2, 3, 3{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_3_52_5/pov_whole_polytope_3_52_5.png')} alt = 'static'/>
            <figcaption>{'{'}3, 5/2, 5{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_3_3_52/pov_whole_polytope_3_3_52.png')} alt = 'static'/>
            <figcaption>{'{'}3, 3, 5/2{'}'}</figcaption>
        </figure>
        </div>

        <div>
        All 10 regular star polytopes have the
        same H4 symmetry as
        the 120-cell and the 600-cell. They can be constructed by
        stellating and faceting the 120-cell and the 600-cell.
        We start from the 120-cell and the 600-cell to warm up.
        We will get familiar with 4D visualization by projection.
        Then we move on to the 10 star polytopes.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_5_3_3_cell120/pov_whole_polytope_5_3_3_cell120.png')} alt = 'static'/>
            <figcaption>120-cell {'{'}5, 3, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_3_3_5_cell600/pov_whole_polytope_3_3_5_cell600.png')} alt = 'static'/>
            <figcaption>600-cell {'{'}3, 3, 5{'}'}</figcaption>
        </figure>
        </div>
        <div>
        When I render images for polyhedra and 
        polytopes in this website, I use colors to indicate the shape of polyhedra or cells. 
        Here are the shapes with 
        colors: <span style={{color: "red"}}>dodecahedron
        </span>, <span style={{color: "green"}}>icosahedron
        </span>, <span style={{color: "cyan"}}>tetrahedron
        </span>, <span style={{color: "blue"}}>small stellated dodecahedron
        </span>, <span style={{color: "yellow"}}>great dodecahedron
        </span>, <span style={{color: "magenta"}}>great stellated dodecahedron
        </span>, and <span style={{color: "orange"}}>great icosahedron
        </span>.
        </div>

	</div>)
    ;

    this.state.contentHeader = (<span>Overview of 4D star polytopes</span>)
  }
}

export default Intro4D;

