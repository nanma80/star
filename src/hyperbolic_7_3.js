import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Hyperbolic_7_3 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (<div>
        <div>
        Polytopes can be described 
        as <a href="https://en.wikipedia.org/wiki/Tessellation" target="_blank" rel="noopener noreferrer">tessellations</a> of 
        spaces. For example, 
        if you blow up a cube so that it becomes spherical,
        it can be viewed as a partition of a sphere into six patches of 
        rounded squares. Therefore, it is a tessellation, or tiling, of the sphere.
        All the polytopes we've talked about so far have a finite number of faces 
        and can be viewed as tessellations of bounded spaces including 
        spheres and hyperspheres.
        </div>
        <br/>
        <div>
        We can extend the definition of polytopes to include tessellations using
        infinitely many faces covering unbounded spaces.
        We can consider tiling the Euclidean plane using squares, 
        or triangles, or hexagons.
        We can also use polygons to tile the hyperbolic plane. 
        Grammatically, I think the faces should be called "tiles". However,
        in this website, I will keep calling them faces to keep the consistency with polytopes.
        </div>
        <br/>
        <div>
        Tessellations exist
        in all dimensions. The generic term for tessellations in any dimension
        is <a href="https://en.wikipedia.org/wiki/Honeycomb_(geometry)" target="_blank" rel="noopener noreferrer">honeycomb</a>. 
        </div>
        <br/>
        <div>
        There are star tilings in the hyperbolic plane.
        As before, let us start from the convex form, the heptagonal tiling {'{'}7, 3{'}'}. 
        Each face is a heptagon, and each vertex is surrounded by 3 faces. See 
        the <a href="https://en.wikipedia.org/wiki/Heptagonal_tiling" target="_blank" rel="noopener noreferrer">Wikipedia
        page</a> for more information.
        </div>
        </div>
        );

    this.state.content = (
    	<div>
        <h4 id="poincare">Poincaré disk model</h4>
        <div>
        Here is
        the <a href="https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model" target="_blank" rel="noopener noreferrer">Poincaré 
        disk model</a> of {'{'}7, 3{'}'}. The Poincaré disk model is a representation of the hyperbolic plane. 
        The concept of distance in this model is such that all heptagons 
        are identical regular heptagons. We can pan it a bit to see how
        the heptagons that appear different can be identical. This movement is only caused by
        changing the viewpoint rather than modifying the shape. This is analogous to 
        rotating a cube to view it from different directions.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_3/static.png')} alt = 'static'/>
            <figcaption>Poincaré disk model of {'{'}7, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_3/h_7_3_panning.gif')} alt = 'static'/>
            <figcaption>Panning to show all faces are identical</figcaption>
        </figure>
        </div>

        <div>
        Each face on {'{'}7, 3{'}'} is a heptagon. Each vertex is surrounded by three faces. 
        This is analogous to the <Link to='/Polyhedron_5_3'>dodecahedron {'{'}5, 3{'}'}</Link>.
        If we only care about the local properties about a single face and its neighbors,
        the numbers of sides of the faces, 7 and 5, are essentially the only difference.
        The numbers of faces, infinite and 12, are very different. However, I see that as a global
        property.
        </div>

        <h4 id="hyperboloid">Hyperboloid model</h4>
        <div>
        Here is
        the <a href="https://en.wikipedia.org/wiki/Hyperboloid_model" target="_blank" rel="noopener noreferrer">Hyperboloid 
        model</a> of {'{'}7, 3{'}'}. It has a 3D structure. The distance is as same as the one in the Minkowski space, which is used in relativity.
        When you treat the vertical axis as time (t), and the two horizontal axes as space (x1 and x2), the distance (s) 
        is defined by s^2 = t^2 - x1^2 - x2^2. Again, all the "distorted" heptagons are actually regular heptagons. All the internal angles 
        of the heptagons are the same.
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

