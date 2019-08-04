import React from "react";
import App from './App';

class Welcome extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
    	<div>
    		A polytope is a generic math term for polygons in a 2D plane, or polyhedra in a 
    		3D space, or similar objects in a 4D hyperspace and beyond. It is an amazing 
    		subject generating great mathematical ideas and artistic pictures. 
    		This website visualizes a specific type of polytopes, called star polytopes.
    	</div>
    	<div>
    		A pentagram is the simplest star polytope. It's related to the common pentagon 
    		in that both have 5 vertices and 5 edges. The only difference is that the edges
    		of a pentagram intersect with each other and those of a pentagon do not.
    	</div>
	</div>)
    ;

    this.state.contentHeader = (<span> Welcome to star polytopes! </span>)
  }
}

export default Welcome;

