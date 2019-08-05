import React from 'react';
import App from './App';

class Hexagram extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		Hexagram is ...
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 2D: Hexagram </span>);
  }
}

export default Hexagram;

