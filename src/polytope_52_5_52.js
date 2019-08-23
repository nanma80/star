import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_52_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            52_5_52 is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/pov_whole_polytope_52_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 5/2{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            
            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/polytope_52_5_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 52_5_52 </span>);
  }
}

export default Polyhedron_52_5_52;

