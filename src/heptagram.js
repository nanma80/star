import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Heptagram extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polygon/polygon_7_2.png')} alt = 'static'/>
                <figcaption>Regular heptagram {'{'}7/2{'}'}</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/polygon/polygon_7_3.png')} alt = 'static'/>
                <figcaption>Regular heptagram {'{'}7/3{'}'}</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/polygon/polygon_7_1.png')} alt = 'static'/>
                <figcaption>Regular heptagon {'{'}7{'}'}</figcaption>
            </figure>

            </div>

            <h4>Two heptagrams</h4>
            <div>
            Unlike pentagram, which has a single shape, 
            there are two types of heptagrams. 
            The Schläfli symbols are {'{'}7/2{'}'}, and {'{'}7/3{'}'}.
            When we follow the construction methods, faceting or stellation, as for <Link to='/pentagram'>pentagram</Link>, 
            we have more choices. 
            </div>
            <ul>
            <li>
            Faceting: If we connect the vertices of a heptagon to get edges, 
            we can skip one vertex to get {'{'}7/2{'}'} or two vertices to get {'{'}7/3{'}'}. 
            </li>
            <li>
            Stellation: If we extend the edges of a heptagon, we can stop when the edges meet for the first time or the second time.
            You can see a heptagon in the middle of {'{'}7/2{'}'}. That is the original heptagon we extend from. Similarly, 
            you can see a heptagon, and also a {'{'}7/2{'}'} inside {'{'}7/3{'}'}.
            </li>
            </ul>

            <div>
            When we start from a vertex of a heptagram and go along the edges and vertices, 
            when we come back to the starting vertex, we go around the center
            by 2 rounds for {'{'}7/2{'}'} and 3 rounds for {'{'}7/3{'}'}.
            </div>
            <br/>
            <div>
            Although heptagrams are not used as faces of any 3D or 4D regular star polytope, 
            {'{'}7/2{'}'} can be seen in 
            tessellations in the hyperbolic plane. It appears as faces 
            of <a href="https://en.wikipedia.org/wiki/Order-7_heptagrammic_tiling" target="_blank" rel="noopener noreferrer">{'{'}7/2, 7{'}'}</a> and as vertex figures of the dual 
            tessellation <a href="https://en.wikipedia.org/wiki/Heptagrammic-order_heptagonal_tiling"  target="_blank" rel="noopener noreferrer">{'{'}7, 7/2{'}'}</a>. The
            hyperbolic tessellations are out of scope of this website.
            </div>

            <h4>Explosion</h4>
            <div>
            We can "explode" the heptagram {'{'}7/3{'}'} by 
            moving its edges away from the center.
            The moving edges first form a different heptagram {'{'}7/2{'}'},
            and then a heptagon {'{'}7{'}'}.
            </div>
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polygon/exploded_7_3.gif')} alt = 'static'/>
                <figcaption>Exploded heptagram</figcaption>
            </figure>
            </div>

            <h4>General star polygons</h4>
            <div>
            After going through the exercise of heptagon, you can easily think of a general star polygon as {'{'}p/q{'}'} by
            starting from a regular p-gon, and connecting edges by skipping q-1 vertices. The only caveat is that when p and q 
            are not coprime, you come back to the starting vertex before creating p edges. 
            We will see an example of <Link to='/hexagram'>hexagram</Link> in the next page.
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Heptagrams {'{'}7/2{'}'}, {'{'}7/3{'}'} </span>);
  }
}

export default Heptagram;

