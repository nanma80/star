import React from "react";
import App from './App';
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@nanma80/exploding-4d-star-polytopes";
import './observable_embed.css';

class ObservableEmbed extends App {
    viewOfExplosionRef = React.createRef();
    viewOfStrutScaleRef = React.createRef();
    animationRef = React.createRef();

    componentDidMount() {
        const runtime = new Runtime();
        const main = runtime.module(notebook, name => {
            console.log(name);
          if (name === "mainView") {
            return new Inspector(this.animationRef.current);
          };
          if (name === "viewof explosion") {
            return new Inspector(this.viewOfExplosionRef.current);
          };
          if (name === "viewof strutScale") {
            return new Inspector(this.viewOfStrutScaleRef.current);
          };

        });

        var ref = this.animationRef;

        main.redefine("mainView", 
            ["explosion","polytopes","name","grmul","strutScale","rotated4dViewOriginal","explode","polytopeData"], 
            function(explosion,polytopes,name,grmul,strutScale,rotated4dViewOriginal,explode,polytopeData)
            {
              const explodeAmt = [explosion, null, polytopes[name].divisor];
              const strutLength = grmul( [2,3,1], strutScale );
              return rotated4dViewOriginal( this,
                                  explode( polytopeData, explodeAmt ),
                                  [ [[1],[],[],[]], [[1],[],[],[]], strutLength ],
                                  { renderWidth: ref.current.offsetWidth * 0.9, orbitControl: false }
                                 )
            }
        );

        main.redefine("name", this.props.name);
    }

    render() {
        return (
            <div>
                <h4>Interactive exploded view</h4>
                <div>
                Although the animations of the exploding polytope look nice, I bet you
                want to have more control over the view point and the speed of animation. 
                Scott Vorthmann, the creator
                of <a href="http://vzome.com/home" target="_blank" rel="noopener noreferrer">vZome</a>, 
                worked with me to 
                create <a href="https://observablehq.com/@vorth/exploding-4d-star-polytopes" target="_blank" rel="noopener noreferrer">this Observable page</a>.
                You can use the sliders to control the factor of explosion between the cells
                and the length of the edges. You can also use the mouse or the touch screen
                to rotate, pan, and zoom.
                This component, just like the desktop App vZome, simulates the ZomeTool.

                </div>
                <div class="observable-div">
                    <div ref={this.animationRef}></div>
                    <div ref={this.viewOfExplosionRef}></div>
                    <div ref={this.viewOfStrutScaleRef}></div>
                </div>
            </div>
        );
    }
}

export default ObservableEmbed;

