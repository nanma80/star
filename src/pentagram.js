import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Pentagram extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polygon/polygon_5_2.png')} alt = 'static'/>
                <figcaption>regular pentagram in the context of star polytopes</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/polygon/wrong_polygon_5_2.png')} alt = 'static'/>
                <figcaption><strong>NOT</strong> the definition we use</figcaption>
            </figure>

            <figure>
                <img src = {require('./images/polygon/polygon_5_1.png')} alt = 'static'/>
                <figcaption>regular pentagon</figcaption>
            </figure>
            </div>
            <div>
                <h4>What is a pentagram?</h4>
                <div>
                A pentagram is a <a href="https://en.wikipedia.org/wiki/Star_polygon" target="_blank" rel="noopener noreferrer">star polygon</a>, and the simplest star polytope. Although everyone knows
                what it looks like, people may disagree on the numbers of vertices and edges on a pentagram.
                </div>
                <ul>
                <li>
                In the context of star polytopes, we treat the pentagram as the first image above but not the second one. 
                It has only 5 vertices on the outside. There are 5 edges which are the diagonals of a pentagon.
                The edges intersect with each other. But we don't count the intersections as vertices of the pentagram. 
                </li>
                <li>
                We do not use the second image as the definition here. That image has 10 vertices and 10 shorter edges.
                </li>
                </ul>
                <h4>Self-intersecting</h4>
                <div>
                Using the first definition, the structure of a pentagram is very similar to that of a pentagon.
                There are 5 vertices and 5 edges. Two edges meet at a vertex and two vertices are connected by an edge. 
                The pentagram can be viewed as a relaxed and special version of the pentagon.
                </div>
                <br/>
                <div>
                They are different because the edges of the pentagram intersect with each other whereas those of the
                pentagon don't. Another difference is that the entire pentagon are on the same side of an edge 
                and its extension, whereas a pentagram doesn't have this property (convexity). Thinking 
                of the edges of pentagram as laser beams helps understanding it, because laser beams can go 
                pass each other.
                </div>
                <br/>
                <div>
                Having accepted the pentagram is a special pentagon, we can also talk about a regular 
                pentagram as a special regular pentagon. 
                They share the following properties: the lengths of edges are all the same, 
                and the angles at the vertices are all the same.
                We can distinguish these two figures only by checking if the 
                edges intersect with each other or checking convexity.
                </div>
                <br/>
                <div>
                If we use the definition in the second image, we would think of it as a decagon 
                and it is not regular in any sense.
                </div>

                <h4>Construction</h4>
                <div>
                We can construct a pentagram by starting from a regular pentagon, and doing either of the following.
                <ol>
                    <li>
                    Constructing diagonals. We keep the original vertices of the pentagon and construct new edges. Starting from
                    each vertex, we skip the nearest neighbor and connect to the second vertex to get an edge.
                    </li>
                    <li>
                    Extending edges in both directions until they meet. In this process, we keep the edges 
                    (if you think of them as unbounded straight lines) and create new vertices. 
                    You can see a pentagon in the middle of a pentagram. That is the original pentagon we extend from. 

                    The two edges that meet at a pentagram vertex are not adjacent to each other in the original pentagon. 
                    They are separated by another edge in the middle.
                    </li>
                </ol>
                One can see the duality between these two processes. If we swap "vertices" and "edges", and swap
                "connecting 2 vertices to form an edge" and "extend 2 edges to form a vertex", 
                one process becomes the other.
                </div>
                <h4>Notation</h4>
                <div>
                The <a href="https://en.wikipedia.org/wiki/Schl%C3%A4fli_symbol" target="_blank" rel="noopener noreferrer">Schläfli symbol</a> denotes the regular pentagon 
                as {'{'}5{'}'} because it has 5 sides. It denotes a pentagram as {'{'}5/2{'}'}. You can think of the number 2 
                as coming from the following processes.
                <ul>
                <li>
                Connecting vertices of a pentagon. Starting from a vertex, you skip the nearest neighbor and connect to the second vertex
                to construct an edge. 
                </li>
                <li>
                Extending edges of a pentagon. When we extend an edge, we construct a vertex when it meets not the immediate neighboring edge, 
                but the second edge.
                </li>
                <li>
                Tracing the pentagram. Imagine you start from a vertex of a pentagam and
                follow the edges, when you come back to the same vertex, you go around the center by 2 rounds as oppose to 1 round for a pentagon.
                </li>
                </ul>
                </div>
                <br/>
                <div>
                You will see how the notation generalize when we talk about <Link to='/heptagram'>heptagrams</Link> in the next page.
                </div>
            </div>


    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Pentagram </span>);
  }
}

export default Pentagram;

