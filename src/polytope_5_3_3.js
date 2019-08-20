import React from 'react';
import App from './App';

class Polyhedron_5_3_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		<div>
            The 120-cell is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/pov_whole_polytope_5_3_3_cell120.png')} alt = 'static'/>
                <figcaption>120-cell {'{'}5, 3, 3{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_3_3_cell120/polytope_5_3_3_cell120_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>



    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 120-cell </span>);
  }
}

export default Polyhedron_5_3_3;

