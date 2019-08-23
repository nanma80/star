import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_3_3_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            The Grand 600-cell (3,3,5/2) is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/pov_whole_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5/2{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 1</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_6_6.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 6</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_7_7.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 7</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/polytope_3_3_52_layers_8_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 8</figcaption>
            </figure>
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Grand 600-cell </span>);
  }
}

export default Polyhedron_3_3_52;

