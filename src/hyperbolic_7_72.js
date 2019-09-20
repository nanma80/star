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

        Again, we shrink faces to locate the faces.
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
        model, on which we can see the star shape in 3D. 

        Each heptagonal
        face is on a plane. The other faces can cross a face to go to the other side. 
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_72/hyperboloid.png')} alt = 'static'/>
            <figcaption>Hyperboloid model of {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_72/highlightCenter_topView_hyperboloid.png')} alt = 'static'/>
            <figcaption>highlighting a face</figcaption>
        </figure>
        </div>

        <div>
        The analogy between this shape and the <Link to='/Polyhedron_5_52'>great
        dodecahedron {'{'}5, 5/2{'}'}</Link> is most obvious by looking into a face.
        </div>
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_7_72/highlightCenter_hyperboloid.png')} alt = 'static'/>
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
        For each heptagrammic face {'{'}7/2{'}'}, we take the convex hull
        to construct a heptagon {'{'}7{'}'}. Then, we have {'{'}7, 7/2{'}'}.

        This is the second stellation of {'{'}7, 3{'}'}.

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_72_7/static.png')} alt = 'static'/>
            <figcaption>Highlighting a face on {'{'}7/2, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_72/static.png')} alt = 'static'/>
            <figcaption>Take convex hull to construct {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        </div>

        <div><strong>
        [ Images to add:
        1. heptagon -> heptagram -> heptagon
        ]       
        </strong></div> 
        </li>
        <li>
        Faceting from {'{'}3, 7{'}'}:

        The outside edges of seven faces around a vertex form a heptagon. 
        Use this heptagon as a face, we immediately have {'{'}7, 7/2{'}'}.

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/h_3_7/static.png')} alt = 'static'/>
            <figcaption>{'{'}3, 7{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/h_7_72/static.png')} alt = 'static'/>
            <figcaption>Use the heptagon as a face to construct {'{'}7, 7/2{'}'}</figcaption>
        </figure>
        </div>

        </li>
        </ul>

        </div>
        )

    ;

    this.state.contentHeader = (<span> Heptagrammic-order heptagonal tiling {'{'}7, 7/2{'}'} </span>);
  }
}

export default Hyperbolic_7_72;

