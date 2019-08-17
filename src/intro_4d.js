import React from "react";
import App from './App';
import { Link } from 'react-router-dom';

class Intro4D extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        Overview of 4D polytopes...
	</div>)
    ;

    this.state.contentHeader = (<span>Overview of 4D star polytopes</span>)
  }
}

export default Intro4D;

