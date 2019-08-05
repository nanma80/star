import React from "react";
import App from './App';

class Welcome extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
    	<div>
    		In geometry, a <strong>polytope</strong> is a generic term for polygons 
            in a 2D plane, or polyhedra in a 
    		3D space, or similar objects in a 4D hyperspace and beyond. It is an amazing 
    		subject generating great mathematical ideas and artistic inspiration. 
    		This website visualizes a specific type of polytopes, called <strong>star</strong> polytopes.
    	</div>
        <figure>
            <img src = {require('./images/polygon/polygon_5_2.png')} alt = 'static'/>
            <figcaption>pentagram</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polygon/polygon_5_1.png')} alt = 'static'/>
            <figcaption>pentagon</figcaption>
        </figure>

        <br/>
    	<div>
    		A pentagram is the simplest star polytope. It's related to the common pentagon 
    		in that both have 5 vertices and 5 edges. The only difference is that the edges
    		of a pentagram intersect with each other and those of a pentagon do not.
    	</div>
        <br/>
        <div>
            We will start from the 2D star polygons like the pentagram. Then we will
            introduce generalizations of the pentagram in 3D and 4D spaces in this website.
            I am not trying to make it a rigorous tutorial about these shapes, but rather
            a gallery of pictures with some explanations. The goal is to understand their
            structures intuitively. Here is a sneak peek of 3D and 4D shapes that you will read about.
        </div>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Small stellated dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
            <figcaption>Great stellated 120-cell</figcaption>
        </figure>

	</div>)
    ;

    this.state.contentHeader = (<span> Visualize star polytopes </span>)
  }
}

export default Welcome;

