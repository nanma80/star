import React from "react";
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';
// import { HashLink as Link } from 'react-router-hash-link';

class Welcome extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <Link to="/summary_3d#categorized">Test link</Link>
    	<div>
    		In geometry, a <a href="https://en.wikipedia.org/wiki/Polytope" target="_blank" rel="noopener noreferrer">polytope</a> is 
            a polygon 
            in a 2D plane, or a polyhedron in a 
    		3D space, or a similar object in a 4D hyperspace and beyond. It is an amazing 
    		subject generating great mathematical ideas and artistic inspiration. 
    		This website visualizes a specific type of polytopes, 
            called the <a href="https://en.wikipedia.org/wiki/Star_polyhedron#Star_polytopes" target="_blank" rel="noopener noreferrer">star polytopes</a>.
    	</div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polygon/polygon_5_2.png')} alt = 'static'/>
            <figcaption>Pentagram</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polygon/polygon_5_1.png')} alt = 'static'/>
            <figcaption>Pentagon</figcaption>
        </figure>
        </div>

        <br/>
    	<div>
    		A pentagram is the simplest star polytope. It's related to the common pentagon 
    		in that both have 5 vertices and 5 edges. The only difference is that the edges
    		of a pentagram intersect with each other and those of a pentagon do not.
    	</div>
        <br/>
        <div>
            We will start from the 2D star polygons like the pentagram. Then we will
            introduce generalizations of the pentagram in 3D and 4D spaces.
            I am not trying to make it a rigorous tutorial about these shapes, but rather
            a gallery of pictures with some explanations. The goal is to help us 
            to intuitively understand their
            structures. I restrict the discussion to regular polytopes. 
        </div>
        <br/>
        <div>
            This website is inspired by 
            the <a href="http://eusebeia.dyndns.org/4d/" target="_blank" rel="noopener noreferrer">Eusebeia 4D visualization</a> website,
            which includes a comprehensive list of 3D and 4D shapes but doesn't include the star polytopes.
        </div>
        <br/>
        <div>
            Here is a sneak peek of 3D and 4D shapes that you will read about.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>3D: small stellated dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/exploded_GreatDodecahedron.gif')} alt = 'static'/>
            <figcaption>3D: great dodecahedron, exploded view</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
            <figcaption>4D: great stellated 120-cell</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_5_3_52/polytope_5_3_52_layers_3_3.gif')} alt = 'static'/>
            <figcaption>4D: grand 120-cell, Layer 3</figcaption>
        </figure>

        </div>
	</div>)
    ;

    this.state.contentHeader = (<span> Visualize star polytopes </span>)
  }
}

export default Welcome;

