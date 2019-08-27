import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import ObservableEmbed from "./observable_embed";

class Polyhedron_5_52_3 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
            <div>
            5_52_3 is ...
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/pov_whole_polytope_5_52_3.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 3{'}'}</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_2_2.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 2</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_3_3.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 3</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_4_4.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 4</figcaption>
            </figure>
            </div>

            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_5_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: layer 5</figcaption>
            </figure>
            </div>
            
            <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_3/polytope_5_52_3_layers_2_5.gif')} alt = 'static'/>
                <figcaption>Exploded view: the whole northern hemisphere and equator</figcaption>
            </figure>
            </div>
            <ObservableEmbed name="{5,5/2,3}"/>
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 5_52_3 </span>);
  }
}

export default Polyhedron_5_52_3;

