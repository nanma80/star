import React from "react";
import App from './App';

class Welcome extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
    <h1>Welcome to star polytopes</h1>
    </div>)
    ;

    this.state.contentHeader = (<span> Welcome to star polytopes! </span>)
  }
}

export default Welcome;

