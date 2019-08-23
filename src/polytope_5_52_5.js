import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Polyhedron_5_52_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            5_52_5 is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/pov_whole_polytope_5_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 5{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/polytope_5_52_5_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 5_52_5 </span>);
  }
}

export default Polyhedron_5_52_5;

