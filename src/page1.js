import React from 'react';
import App from './App';

class Page1 extends App {
  constructor(props) {
    super(props);

    this.state.content = "new content for page 1";

    this.state.contentHeader = (<span> 2D </span>);
  }
}

export default Page1;

