import React from 'react';
import App from './App';

class Pentagram extends App {
  constructor(props) {
    super(props);

    this.state.content = (
    	<div>
    		Pentagram is ...
    	</div>
    	)
    ;

    this.state.contentHeader = (<span> Pentagram </span>);
  }
}

export default Pentagram;

