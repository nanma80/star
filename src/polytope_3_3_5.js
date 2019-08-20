import React from 'react';
import App from './App';

class Polyhedron_3_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		<div>
            The 600-cell is ...
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_whole_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>600-cell {'{'}3, 3, 5{'}'}</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_1_1.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 1</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_6_6.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 6</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_7_7.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 7</figcaption>
            </figure>
            </div>

            <div class = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/polytope_3_3_5_cell600_layers_8_8.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 8</figcaption>
            </figure>
            </div>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 600-cell </span>);
  }
}

export default Polyhedron_3_3_5;

