import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_52_5_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            52_5_3 is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/pov_whole_polytope_52_5_3.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 3{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/polytope_52_5_3_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 52_5_3 </span>);
  }
}

export default Polyhedron_52_5_3;

