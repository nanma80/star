import React from 'react';
import App from './App';

class Heptagram extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		Heptagram is ...
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> 2D: Heptagram </span>);
  }
}

export default Heptagram;

