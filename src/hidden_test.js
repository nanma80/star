import React from "react";
import App from './App';
import { UrlViewer } from 'react-vzome';

class HiddenTest extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <h4 id="test">Test title</h4>
        <div>
        Before the url viewer
        </div>
        <div className="vzome-container" >
        <UrlViewer url="./120_cell.vZome" />
        </div>
        <div>
        After the url viewer
        </div>
    </div>)
    ;

    this.state.contentHeader = (<span>Hidden test page</span>)
  }
}

export default HiddenTest;

