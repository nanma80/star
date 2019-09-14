import React from "react";
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Intro3D extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <div>
        In the 3D Euclidean space, there are five regular convex 
        polyhedra, aka the <a href="https://en.wikipedia.org/wiki/Platonic_solid" target="_blank" rel="noopener noreferrer">Platonic solids</a>.
        On these solids, the faces are identical regular 
        convex polygons and the vertex figures
        are also identical regular convex polygons. We will talk about the vertex figure 
        in the page of the <Link to='/Polyhedron_5_3#vertex'>dodecahedron</Link>.
        </div>
        <br/>
        <div>
        Once we accept the star polygons to our family in 2D, we can also extend the 
        Platonic solids. We allow
        the faces to be identical regular <strong>convex or star</strong> polygons, and the vertex
        figures to be identical regular <strong>convex or star</strong> polygons.
        We have nine regular <strong>convex or star</strong> polyhedra in total.
        They are the five Platonic solids, plus 
        four <a href="https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron" target="_blank" rel="noopener noreferrer">Kepler–Poinsot polyhedra</a>.
        The four additional solids have either star faces or star vertex figures.
        They are two pairs of dual solids.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_52_5'>Small stellated dodecahedron {'{'}5/2, 5{'}'}</Link></figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_5_52'>Great dodecahedron {'{'}5, 5/2{'}'}</Link></figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_52_3'>Great stellated dodecahedron {'{'}5/2, 3{'}'}</Link></figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_3_52'>Great icosahedron {'{'}3, 5/2{'}'}</Link></figcaption>
        </figure>
        </div>

        <div>
        It turns out all four regular star polyhedra have the
        same <a href="https://en.wikipedia.org/wiki/Icosahedral_symmetry" target="_blank" rel="noopener noreferrer">icosahedral symmetry</a> as
        the (convex) dodecahedron and the icosahedron. They can be constructed by
        stellating and faceting the dodecahedron and the icosahedron. 
        We start from the dodecahedron and the icosahedron to warm up.
        We introduce several concepts and notations, 
        and get familiar with certain 3D visualizations. 
        Then we move on to the star polyhedra.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_5_3'>Dodecahedron</Link></figcaption>
        </figure>
        <figure>
            <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption><Link to='/Polyhedron_3_5'>Icosahedron</Link></figcaption>
        </figure>
        </div>

        <div>
        We will not cover the regular compounds. They are 3D objects 
        similar to the <Link to='/hexagram'>hexagram</Link>. 
        There are five of them in 3D. They are out of scope of this website.
        You can visit a <a href="https://en.wikipedia.org/wiki/Polytope_compound#Regular_compounds" target="_blank" rel="noopener noreferrer">Wikipedia
        </a> page to see them.

        </div>

	</div>)
    ;

    this.state.contentHeader = (<span>Overview of star polyhedra</span>)
  }
}

export default Intro3D;

