import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_3_5_52 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            3_5_52 is ...
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_5_52/polytope_3_5_52_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>

            <ObservableEmbed name="{3,5,5/2}"/>

    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 3_5_52 </span>);
  }
}

export default Polyhedron_3_5_52;

