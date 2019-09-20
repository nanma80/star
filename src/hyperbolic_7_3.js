import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Hyperbolic_7_3 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (<div>
        <div>
        Polytopes can be described as tessellations of spaces. For example, 
        a cube can be viewed as a partition of a sphere into six patches of 
        rounded squares. Therefore, it is a tessellation, or tiling, of the sphere.
        All the polytopes we've talked about so far have a finite number of faces.

        We can extend the definition of polytopes to include tessellations using
        infinite faces. We can consider tiling of an Euclidean plane using squares, 
        or triangles, or hexagons.
        We can also talk about tilings of the hyperbolic plane. Tessellations exist
        in higher dimensions. 
        </div>
        <br/>
        <div>
        There are star tessellations in the hyperbolic plane.
        As before, let us start from the convex form, the heptagonal tiling {'{'}7, 3{'}'}.
        </div>
        </div>
        );

    this.state.content = (
    	<div>
        <h4 id="poincare">Poincare disk model</h4>
        <div>
        Here is
        the <a href="https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model" target="_blank" rel="noopener noreferrer">Poincare 
        disk model</a> of {'{'}7, 3{'}'}. The Poincare disk model is a representation of the hyperbolic space. It shows infinitely many heptagons.
        The concept of distance in this model is such that all heptagons 
        are identical regular heptagons. We can pan it a bit to see how
        the heptagons that appear different can be identical. This movement is only 
        changing the viewpoint rather than modifying the shape. This is analogous to 
        rotating a cube to see it from different angles.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_3/static.png')} alt = 'static'/>
            <figcaption>Poincare disk model of {'{'}7, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_3/h_7_3_panning.gif')} alt = 'static'/>
            <figcaption>Panning to show all faces are identical</figcaption>
        </figure>
        </div>

        <div>
        Each face on {'{'}7, 3{'}'} is a heptagon. Each vertex is surrounded by three faces. This is analogous to a dodecahedron {'{'}5, 3{'}'}.
        The differences include the shapes of faces: {'{'}7{'}'} versus {'{'}5{'}'}, the overall spaces: a hyperbolic plane versus a sphere, 
        and the number of faces: infinite versus 12.
        </div>

        <h4 id="hyperboloid">Hyperboloid model</h4>
        <div>
        Here is
        the <a href="https://en.wikipedia.org/wiki/Hyperboloid_model" target="_blank" rel="noopener noreferrer">Hyperboloid 
        model</a> of {'{'}7, 3{'}'}. It has a 3D structure. The distance is as same as the one in the Minkowski space, which is used in relativity.
        When you treat the vertical axis as time, and the two horizontal axes as space, the distance is defined as the square root of 
        time square minus space square. Again, all the "distorted" heptagons are actually regular heptagons.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_3/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}7, 3{'}'}</figcaption>
        </figure>
        </div>

        </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Heptagonal tiling {'{'}7, 3{'}'} </span>);
  }
}

export default Hyperbolic_7_3;

