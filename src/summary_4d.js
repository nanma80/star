import React from "react";
import App from './App';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

class Summary4D extends App {

  chartRef = React.createRef();

  useZoomWorkaround = () => {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isWindows = /Win/.test(navigator.platform);
    return window.devicePixelRatio > 1 && isChrome && isWindows;
  };

  zoomWorkaroundBeforeDagreRender = (svg) => {
    if(this.useZoomWorkaround())  {
        svg.style.zoom = 1 / window.devicePixelRatio;
    }
  };

  zoomWorkaroundAfterDagreRender = (svg) => {
    if(this.useZoomWorkaround())  {
        svg.style.zoom = 1;
    }
  };

  drawChart = () => {
    var g = new dagreD3.graphlib.Graph()
          .setGraph({nodesep: 20, ranker:"tight-tree"})
          .setDefaultEdgeLabel(function() { return {}; });

        var gen1color = "#ddf";
        var gen2color = "#fdd";

        g.setNode("5_3_3",  { 
            label: "<a href=/star/#/polytope_5_3_3>120-cell<br/>{5, 3, 3}</a>"
            , color: gen1color
            });
        g.setNode("52_5_3",  { 
            label: "<a href=/star/#/polytope_52_5_3>Small stellated<br/>120-cell<br/>{5/2, 5, 3}</a>"
            , color: gen1color
            });
        g.setNode("5_52_5",  { 
            label: "<a href=/star/#/polytope_5_52_5>Great 120-cell<br/>{5, 5/2, 5}</a>"
            , color: gen1color
            });
        g.setNode("52_3_5",  { 
            label: "<a href=/star/#/polytope_52_3_5>Great<br/>stellated<br/>120-cell<br/>{5/2, 3, 5}</a>"
            , color: gen1color
            });
        g.setNode("3_5_52",  { 
            label: "<a href=/star/#/polytope_3_5_52>Icosahedral<br/>120-cell<br/>{3, 5, 5/2}</a>"
            , color: gen1color
            });
        g.setNode("5_3_52",  { 
            label: "<a href=/star/#/polytope_5_3_52>Grand<br/>120-cell<br/>{5, 3, 5/2}</a>"
            , color: gen2color
            });
        g.setNode("52_5_52",  { 
            label: "<a href=/star/#/polytope_52_5_52>Grand<br/>stellated<br/>120-cell<br/>{5/2, 5, 5/2}</a>"
            , color: gen2color
            });
        g.setNode("5_52_3",  { 
            label: "<a href=/star/#/polytope_5_52_3>Great<br/>grand<br/>120-cell<br/>{5, 5/2, 3}</a>"
            , color: gen2color
            });
        g.setNode("52_3_3",  { 
            label: "<a href=/star/#/polytope_52_3_3>Great<br/>grand<br/>stellated<br/>120-cell<br/>{5/2, 3, 3}</a>"
            , color: gen2color
            });
        g.setNode("3_52_5",  { 
            label: "<a href=/star/#/polytope_3_52_5>Great<br/>icosahedral<br/>120-cell<br/>{3, 5/2, 5}</a>"
            , color: gen2color
            });

        g.setEdge("5_3_3", "52_5_3", {color: "red"});
        g.setEdge("52_5_3", "5_52_5", {color: "blue"});
        g.setEdge("5_52_5", "52_3_5", {color: "red"});
        g.setEdge("5_52_5", "3_5_52", {color: "green"});
        g.setEdge("52_3_5", "5_3_52", {color: "purple"});
        g.setEdge("5_3_52", "52_5_52", {color: "red"});
        g.setEdge("52_5_52", "5_52_3", {color: "blue"});
        g.setEdge("5_52_3", "52_3_3", {color: "red"});
        g.setEdge("52_5_52", "3_52_5", {color: "green"});
        // g.setEdge("3_5_52", "3_52_5", {color: "black"});

        g.nodes().forEach(function(v) {
            var node = g.node(v);
            node.rx = node.ry = 10;
            node.width = 90;
            node.height = 90;
            node.labelType = "html";
            node.style = "fill: " + node.color + "; font-weight: bold";
        });

        g.edges().forEach(function(e) {
            var edge = g.edge(e);
            edge.style = "fill: white; stroke-width: 2px; stroke: " + edge.color+ ";";
            edge.arrowheadStyle = "fill: " + edge.color + ";";
            edge.lineInterpolate = 'basis';
        });
        
        var render = new dagreD3.render();
        var svgCanvas = d3.select(this.chartRef.current)
            .append("svg")
            .attr("width", 300)
            .attr("height", 800);
        var inner = svgCanvas.append("g");

        d3.selectAll(".node .label")
            .attr("text-anchor", "middle");

        var svg = document.getElementsByTagName('svg')[0];
        this.zoomWorkaroundBeforeDagreRender(svg);
        render(inner, g);
        this.zoomWorkaroundAfterDagreRender(svg);


        var xCenterOffset = (svgCanvas.attr("width") - g.graph().width) / 2;
        inner.attr("transform", "translate(" + xCenterOffset + ", 20)");
        svgCanvas.attr("height", g.graph().height + 40);
  };


  componentDidMount() {
    this.drawChart();
    if (window.ref.current !== null) { 
      window.ref.current.scrollIntoView({block: "center"});
    };
  }


  constructor(props) {
    super(props);

    this.state.intro = (
        <div>
        After looking at the star polytopes individually,
        let us have a summary about all of them,
        and review the connections.
        </div>
        );

    this.state.content = (<div>
        <h4 id="relationship">Relationship among the 120-cell and the 9 stellations</h4>

        <div>
        Among the ten star polytopes in 4D, nine can be constructed by stellating the 
        120-cell, one can be constructed by stellating the 600-cell. Let us 
        summarize the stellation process from the 120-cell. All the steps are 
        already explained in the individual pages. Let us view all of them in a chart.
        </div>


        <div ref={this.chartRef} className = 'chart-div'></div>
        <figcaption>
            Connections among the 120-cell and its stellations.
        </figcaption>

        <br/>
        <div>
        In this
        chart, <span style={{color: "red"}}>the red arrows mean extending edges 
        so that a pentagon becomes a pentagram</span>. <span style={{color: "blue"}}>The 
        blue arrows mean taking the convex hull of pentagramic faces
        so that they become pentagons</span>. <span style={{color: "green"}}>The 
        green arrows mean replacing the cells by 
        the other cells with the same edges</span>. <span style={{color: "purple"}}>The 
        purple arrow means taking the convex hull of cells
        so that star polyhedra become convex polyhedra</span>. 

        The <a href="https://en.wikipedia.org/wiki/Regular_4-polytope#Names" target="_blank" rel="noopener noreferrer">naming 
        convention</a> says the word "stellated" means 
        extending edges (roughly red arrows). 
        The word "great" means replacing faces by larger faces (roughly blue arrows), 
        and the word "grand" means replacing cells by larger cells (roughly the purple arrow).
        </div>
        <br/>
        <div>
        <span style={{backgroundColor: "#ddf"}}>The nodes with light blue background 
         represent polytopes in the first generation</span>. <span style={{backgroundColor: "#fdd"}}>
        The nodes with light red background 
        represent polytopes in the second generation</span>. The names of polytopes in
        the second generation have "grand", except {'{'}3, 5/2, 5{'}'}.
        </div>
        <br/>
        <div>
        If we ignore the icosahedral 
        polytopes, {'{'}3, 5/2, 5{'}'} and {'{'}3, 5, 5/2{'}'},
        the structure between the nodes and 
        the edges in first and the second generations 
        are the same. If you explode a polytope in 
        the second generation partially,
        at some point, it becomes the counterpart in the first generation.
        </div>

        <h4 id="categorized-edge">Categorized by edge arrangements</h4>

        <div>
        If we only consider the edges of the polytopes and look at them as wireframes, just
        like the vZome models,
        we see three groups of polytopes. The polytopes in each group share the same edge arrangement.
        <ol>
        <li>
        {'{'}3, 3, 5{'}'}, {'{'}3, 5, 5/2{'}'}, {'{'}5, 5/2, 5{'}'}, {'{'}5, 3, 5/2{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_wireframe_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>The common wireframe shared by all polytopes in Group 1</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_whole_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/pov_whole_polytope_5_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 5{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/pov_whole_polytope_5_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}5, 3, 5/2{'}'}</figcaption>
            </figure>
        </div>
        </li>

        <li>
        {'{'}3, 3, 5/2{'}'}, {'{'}3, 5/2, 5{'}'}, {'{'}5/2, 5, 5/2{'}'}, {'{'}5/2, 3, 5{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/pov_wireframe_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>The common wireframe shared by all polytopes in Group 2</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/pov_whole_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_52_5/pov_whole_polytope_3_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5/2, 5{'}'}</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/pov_whole_polytope_52_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 3, 5{'}'}</figcaption>
            </figure>
        </div>
        </li>

        <li>
        {'{'}5/2, 5, 3{'}'}, {'{'}5, 5/2, 3{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/pov_wireframe_polytope_52_5_3.png')} alt = 'static'/>
                <figcaption>The common wireframe shared by both polytopes in Group 3</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_3/pov_whole_polytope_52_5_3.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 3{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_52_3/pov_whole_polytope_5_52_3.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 3{'}'}</figcaption>
            </figure>
        </div>
        </li>
        </ol>
        </div>


        <h4 id="categorized-face">Categorized by face arrangements</h4>

        <div>
        If we only consider the faces of the polytopes but ignore the cells,
        we see four pairs. Each pair of polytopes shares the same face arrangement.
        If two polytopes share the same face arrangement, they necessarily share the same
        edges. Actually, the four pairs belong to the first two groups of polytopes
        categorized by edge arrangements.
        <ol>
        <li>
        {'{'}3, 3, 5{'}'}, {'{'}3, 5, 5/2{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_5_cell600/pov_whole_polytope_3_3_5_cell600.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_5_52/pov_whole_polytope_3_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5, 5/2{'}'}</figcaption>
            </figure>
        </div>
        </li>

        <li>
        {'{'}5, 5/2, 5{'}'}, {'{'}5, 3, 5/2{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_5_52_5/pov_whole_polytope_5_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}5, 5/2, 5{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_5_3_52/pov_whole_polytope_5_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}5, 3, 5/2{'}'}</figcaption>
            </figure>
        </div>
        </li>


        <li>
        {'{'}3, 3, 5/2{'}'}, {'{'}3, 5/2, 5{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_3_3_52/pov_whole_polytope_3_3_52.png')} alt = 'static'/>
                <figcaption>{'{'}3, 3, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_3_52_5/pov_whole_polytope_3_52_5.png')} alt = 'static'/>
                <figcaption>{'{'}3, 5/2, 5{'}'}</figcaption>
            </figure>
        </div>
        </li>

        <li>
        {'{'}5/2, 5, 5/2{'}'}, {'{'}5/2, 3, 5{'}'}.
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/polytope_52_5_52/pov_whole_polytope_52_5_52.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 5, 5/2{'}'}</figcaption>
            </figure>
            <figure>
                <img src = {require('./images/polytope_52_3_5/pov_whole_polytope_52_3_5.png')} alt = 'static'/>
                <figcaption>{'{'}5/2, 3, 5{'}'}</figcaption>
            </figure>
        </div>
        </li>
        </ol>
        </div>

    </div>)
    ;

    this.state.contentHeader = (<span>Summary of star polyhedra</span>)
  }
}

export default Summary4D;

