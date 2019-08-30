import React from "react";
import App from './App';
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@nanma80/exploding-4d-star-polytopes";
import './observable_embed.css';

class ObservableEmbed extends App {
    viewOfExplosionRef = React.createRef();
    viewOfStrutScaleRef = React.createRef();
    animationRef = React.createRef();
    observableRef = null;

    redefineObservableView = () => {
        var ref = this.animationRef;
        this.observableRef.redefine("mainView", 
            ["explosion","polytopes","name","grmul","strutScale","rotated4dViewOriginal","explode","polytopeData"], 
            function(explosion,polytopes,name,grmul,strutScale,rotated4dViewOriginal,explode,polytopeData)
            {
              const explodeAmt = [explosion, null, polytopes[name].divisor];
              const strutLength = grmul( [2,3,1], strutScale );
              return rotated4dViewOriginal( this,
                                  explode( polytopeData, explodeAmt ),
                                  [ [[1],[],[],[]], [[1],[],[],[]], strutLength ],
                                  { renderWidth: ref.current.offsetWidth, orbitControl: false }
                                 )
            }
        );
    }

    loadObservable = () => {
        const runtime = new Runtime();
        this.observableRef = runtime.module(notebook, name => {
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

        this.observableRef.redefine("name", this.props.name);
        this.redefineObservableView();
    }

    onWindowResize = () => {
      this.redefineObservableView();
    }

    onOrientationChange = () => {
      this.redefineObservableView();
    }

    componentDidMount() {
      window.addEventListener("orientationchange", this.onOrientationChange);
      window.addEventListener('resize', this.onWindowResize);
      this.loadObservable();
    }

    componentDidUpdate(){
      setTimeout(
        ()=>{
          this.redefineObservableView();
        }, 100);
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
                create <a href="https://observablehq.com/@vorth/exploding-4d-star-polytopes" target="_blank" rel="noopener noreferrer">this Observable notebook</a>.
                You can use the sliders to control the factor of explosion between the cells
                and the length of the edges. You can also use the mouse or the touch screen
                to rotate, pan, and zoom.
                This component, just like the desktop App vZome, simulates the ZomeTool.
                This component works the best on a big screen.

                </div>
                <div className="observable-div">
                    <div ref={this.animationRef}></div>
                    <br/>
                    <div className="observable-control">
                      <div ref={this.viewOfExplosionRef}></div>
                      <div className="observable-control-separator"/>
                      <div ref={this.viewOfStrutScaleRef}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ObservableEmbed;

