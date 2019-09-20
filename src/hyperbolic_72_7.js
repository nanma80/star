import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Hyperbolic_72_7 extends App {
  constructor(props) {
    super(props);
    this.state.intro = (<div>
        <div>
        Let us talk about star tilings in the hyperbolic plane. We drew analogy between {'{'}7, 3{'}'}
        and {'{'}5, 3{'}'}, and between {'{'}3, 7{'}'} and {'{'}3, 5{'}'}, in the last two pages.
        Similar to the stellation and faceting process of the dodecahedron and the icosahedron, 
        we can construct star tilings {'{'}7/2, 7{'}'} and {'{'}7, 7/2{'}'}.
        </div>
        <br/>
        <div>
        In this page, we talk about {'{'}7/2, 7{'}'}. Each face is 
        a <Link to='/heptagram'>heptagram {'{'}7/2{'}'}</Link>.
        Each vertex is surrounded by 7 faces. This shape is analogous to 
        the <Link to='/Polyhedron_52_5'>small stellated
        dodecahedron {'{'}5/2, 5{'}'}</Link>.

        See 
        the <a href="https://en.wikipedia.org/wiki/Order-7_heptagrammic_tiling" target="_blank" rel="noopener noreferrer">Wikipedia
        page</a> for more information.

        </div>
        </div>
        );

    this.state.content = (
    	<div>
        <h4 id="poincare">Poincaré disk model</h4>
        <div>
        Here is
        the Poincaré 
        disk model of {'{'}7/2, 7{'}'}. I'm highlighting a face at the center.
        Different faces intersect with each other. The adjacent faces do share edges.
        I find it very helpful to shrink each face. I make each face smaller keeping
        the location of its center.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_72_7/static.png')} alt = 'static'/>
            <figcaption>Poincaré disk model of {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_72_7/h_72_7_shrink.gif')} alt = 'static'/>
            <figcaption>Shrinking faces to show the individual faces</figcaption>
        </figure>
        </div>

        <h4 id="hyperboloid">Hyperboloid model</h4>
        <div>
        Here is
        the Hyperboloid 
        model. I like this view because we can see the star shape in 3D. Each heptagrammic 
        face is on a plane. This can be constructed by extending the edges
        of <Link to='/hyperbolic_7_3'>{'{'}7, 3{'}'}</Link> until
        they meet for the first time.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_72_7/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_72_7/highlightCenter_topView_hyperboloid.png')} alt = 'static'/>
            <figcaption>highlighting a face</figcaption>
        </figure>
        </div>

        <div>
        The analogy between this shape and the <Link to='/Polyhedron_52_5'>small stellated
        dodecahedron {'{'}5/2, 5{'}'}</Link> is most obvious by looking into a face.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_72_7/highlightCenter_hyperboloid.png')} alt = 'static'/>
            <figcaption>A face on {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_highlight_face_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>A face on {'{'}5/2, 5{'}'}</figcaption>
        </figure>
        </div>

        <h4 id="construction">Construction</h4>
        <ul>
        <li>
        Stellation from {'{'}7, 3{'}'}:

        For each heptagonal face {'{'}7{'}'}, we extend the edges until they meet for the
        first time to construct heptagram {'{'}7/2{'}'}. Then, we have {'{'}7/2, 7{'}'}.


        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_3/static.png')} alt = 'static'/>
            <figcaption>{'{'}7, 3{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_72_7/static.png')} alt = 'static'/>
            <figcaption>Stellate heptagons to construct {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        </div>



        </li>
        <li>
        Faceting from {'{'}3, 7{'}'}:

        The outside edges of seven faces around a vertex form a heptagon. Connect each
        vertex to its distance-2 neighbor to construct a heptagram {'{'}7/2{'}'}. 
        Then, we have {'{'}7/2, 7{'}'}.

        <div><strong>
        [ Images to add:
        1. {'{3, 7}'}, highlight the heptagon, connect vertices to get a heptagram.
        ]       
        </strong></div> 


        </li>
        </ul>


    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Order-7 heptagrammic tiling {'{'}7/2, 7{'}'} </span>);
  }
}

export default Hyperbolic_72_7;

