import React from 'react';
import App from './App';
import { HashLink as Link } from 'react-router-hash-link';

class Hyperbolic_7_72 extends App {
  constructor(props) {
    super(props);

    this.state.intro = (<div>
        <div>
        In this page, we talk about {'{'}7, 7/2{'}'}. Each face is 
        a heptagon {'{'}7{'}'}.
        Each vertex is surrounded by 7 faces, which covers the vertex twice. 
        Therefore the vertex figure is a <Link to='/heptagram'>heptagram {'{'}7/2{'}'}</Link>.
        This shape is analogous to 
        the <Link to='/Polyhedron_5_52'>great
        dodecahedron {'{'}5, 5/2{'}'}</Link>.

        See 
        the <a href="https://en.wikipedia.org/wiki/Heptagrammic-order_heptagonal_tiling" target="_blank" rel="noopener noreferrer">Wikipedia
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
        disk model of {'{'}7, 7/2{'}'}. I'm highlighting a face at the center.
        Different faces intersect with each other. The faces with the closest centers
        are not adjacent in the sense that they don't share edges.

        The centers of adjacent faces that do share edges are far away.

        Again, we shrink faces to see them individually.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_72/static.png')} alt = 'static'/>
            <figcaption>Poincaré disk model of {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_72/h_7_72_shrink.gif')} alt = 'static'/>
            <figcaption>Shrinking faces to show the individual faces</figcaption>
        </figure>
        </div>

        <h4 id="hyperboloid">Hyperboloid model</h4>
        <div>
        Here is
        the Hyperboloid 
        model, on which we can see the non-convex shape in 3D. 

        Each heptagonal
        face is on a plane. The other faces can cross a face to go to the other side. 
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_72/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_72/highlightCenter_hyperboloid.png')} alt = 'static'/>
            <figcaption>highlighting a face</figcaption>
        </figure>
        </div>

        <div>
        The analogy between this shape and the <Link to='/Polyhedron_5_52'>great
        dodecahedron {'{'}5, 5/2{'}'}</Link> is most obvious by looking into a face.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_72/highlightCenter_topView_hyperboloid.png')} alt = 'static'/>
            <figcaption>A face on {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_highlight_face_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>A face on {'{'}5, 5/2{'}'}</figcaption>
        </figure>
        </div>

        <h4 id="construction">Construction</h4>
        <ul>
        <li>
        Stellation from {'{'}7, 3{'}'}:
        From {'{'}7, 3{'}'}, we first construct <Link to='/hyperbolic_72_7'>{'{'}7/2, 7{'}'}</Link>.
        For each heptagrammic face {'{'}7/2{'}'} (purple), we take the convex hull
        to construct a heptagon {'{'}7{'}'} (yellow). Then, we have {'{'}7, 7/2{'}'}.


        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_72_7/stellation_1.png')} alt = 'static'/>
            <figcaption>Stellating from {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        </div>

        This is the second stellation of {'{'}7, 3{'}'}. Below are the images showing the two-step stellation 
        process from {'{'}7, 3{'}'} to {'{'}7, 7/2{'}'} via the blue heptagram.

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_3/stellation_2.png')} alt = 'static'/>
            <figcaption>Two step stellation from {'{'}7, 3{'}'}</figcaption>
        </figure>

        <figure>
            <img src = {require('./images/h_7_3/stellated_2_hyperboloid.png')} alt = 'static'/>
            <figcaption>Two step stellation in the hyperboloid model</figcaption>
        </figure>
        </div>

        </li>
        <li>
        Faceting from {'{'}3, 7{'}'}:

        The outside edges of seven faces around a vertex form a heptagon. 
        Use this heptagon as a face, we immediately have {'{'}7, 7/2{'}'}.

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/facet_1.png')} alt = 'static'/>
            <figcaption>Use the heptagon from {'{'}3, 7{'}'} as a face</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_3_7/facet_1_hyperboloid.png')} alt = 'static'/>
            <figcaption>Use the heptagon from {'{'}3, 7{'}'} in the hyperboloid model</figcaption>
        </figure>
        </div>

        </li>
        </ul>

        <h4 id="categorized-edge">Edge arrangement</h4>

        <div>
        If we ignore the faces and only focus on the
        edges, the wireframes of {'{'}3, 7{'}'} and {'{'}7, 7/2{'}'} are the same.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/wireframe_hyperboloid.png')} alt = 'static'/>
            <figcaption>The common wireframe shared by {'{'}3, 7{'}'} and {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}3, 7{'}'}</figcaption>
        </figure>

        <figure>
            <img src = {require('./images/h_7_72/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        </div>
        </div>
        )

    ;

    this.state.contentHeader = (<span> Heptagrammic-order heptagonal tiling {'{'}7, 7/2{'}'} </span>);
  }
}

export default Hyperbolic_7_72;

