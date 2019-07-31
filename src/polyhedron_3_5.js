import React from 'react';
import App from './App';

class Polyhedron_3_5 extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		The regular icosahedron is ...
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Icosahedron </span>);
  }
}

export default Polyhedron_3_5;

