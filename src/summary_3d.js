import React from "react";
import App from './App';
import { Link } from 'react-router-dom';

class Summary3D extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <div>
        Before moving on to 4D, let us summarize the stellation process among 
        the four star polyhedra. Except for the great icosahedron, which is a 
        stellated icosahedron,
        the other 
        three polyhedra can be constructed by stellating the regular dodecahedron.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polygon/pentagram_inside_outside_2.png')} alt = 'static'/>
            <figcaption>Connections among the faces of 
            <br/>the dodecahedron and its stellations</figcaption>
        </figure>
        </div>
        <div>
        If we start from a dodecahedron and focus on one of the pentagonal faces, we can
        construct the faces of the stellated polyhedra in the image above.
        <ul>
        <li>
        The face of the dodecahedron is the red pentagon in the middle. 
        </li>
        <li>
        In the first
        stellation, we extend the edges to form the blue pentagram. The polyhedron is 
        the small stellated dodecahedron.
        </li>
        <li>
        In the second
        stellation, we construct the convex hull of the blue pentagram to get
        the yellow pentagon. The polyhedron is 
        the great dodecahedron.
        </li>
        <li>
        In the third
        stellation, we extend the edges of the yellow pentagon to form the purple
        pentagram. The polyhedron is 
        the great stellated dodecahedron.
        </li>
        </ul>
        </div>

        <div>
        See the following images for the whole polyhedra. In each stellation image,
        I am only showing the extension or addition of one vertex or one face to keep
        the image simple.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>Step 0: Regular dodecahedron</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/stellated_dodecahedron.png')} alt = 'static'/>
            <figcaption>From 0 to 1: Stellating the dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 1: Small stellated dodecahedron {'{'}5/2, 5{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/stellated_dodecahedron_4.png')} alt = 'static'/>
            <figcaption>From 1 to 2: Stellating the small stellated dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 2: Great dodecahedron {'{'}5, 5/2{'}'}</figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
            <figcaption>From 2 to 3: Stellating the great dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 3: Great stellated dodecahedron {'{'}5/2, 3{'}'}</figcaption>
        </figure>
        </div>

        <div>
        At the end, I'd like to mention the great icosahedron. It is the only stellation 
        of the regular icosahedron as a regular star polyhedron. If you choose to 
        stellate the icosahedron in other ways, you may get star polyhedra with 
        non-regular faces, or non-regular vertex figures, or a compound.
        </div>
	</div>)
    ;

    this.state.contentHeader = (<span>Summary of the stellation process in 3D</span>)
  }
}

export default Summary3D;
