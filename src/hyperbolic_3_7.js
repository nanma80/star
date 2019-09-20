import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Hyperbolic_3_7 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (<div>
        <div>
        {'{'}3, 7{'}'} is the dual of <Link to='/hyperbolic_7_3'>{'{'}7, 3{'}'}</Link>.
        Each face is a triangle and each vertex is surrounded by 7 faces. It is 
        analogous to the <Link to='/Polyhedron_3_5'>icosahedron {'{'}3, 5{'}'}</Link>.

        See 
        the <a href="https://en.wikipedia.org/wiki/Order-7_triangular_tiling" target="_blank" rel="noopener noreferrer">Wikipedia
        page</a> for more information.

        </div>
        </div>
        );

    this.state.content = (
    	<div>
        <h4 id="poincare">Poincaré disk model</h4>
        <div>
        Here is the Poincaré disk model. Remember the sides of each face are straight lines in the 
        hyperbolic plane. They look curved only because of the definition of straight lines in
        this model is different.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/static.png')} alt = 'static'/>
            <figcaption>Poincaré disk model of {'{'}3, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_3_7/facet_1.png')} alt = 'static'/>
            <figcaption>7 faces in the center form a heptagon</figcaption>
        </figure>

        </div>

        <div>
        Combining the 7 faces in the center, we get a heptagon on the outside. 
        This is analogous to the
        pentagonal pyramid on top of an icosahedron.
        </div>


        <h4 id="hyperboloid">Hyperboloid model</h4>
        <div>
        Here is the hyperboloid model. Again, all the triangles are equilateral triangles in the 
        hyperboloid model.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}3, 7{'}'}</figcaption>
        </figure>
        </div>

        </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Order-7 triangular tiling {'{'}3, 7{'}'} </span>);
  }
}

export default Hyperbolic_3_7;

