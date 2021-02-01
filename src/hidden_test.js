import React from "react";
import App from './App';
import { UrlViewer } from 'react-vzome';

class HiddenTest extends App {
  constructor(props) {
    super(props);

    this.state.content = (<div>
        <h4 id="test">Test title</h4>
        <div>
        From a local vZome file
        </div>
        <div className="vzome-container" >
        <UrlViewer url="vZome/120_cell.vZome" />
        </div>

        <div>
        From a remote url
        </div>
        <div className="vzome-container" >
        <UrlViewer url="https://raw.githubusercontent.com/nanma80/compound-polytopes/master/data/vZome/compound_75_8_cells_in_600_cell_vertex_first.vZome" />
        </div>
    </div>)
    ;

    this.state.contentHeader = (<span>Hidden test page</span>)
  }
}

export default HiddenTest;

