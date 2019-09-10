import React from "react";
import App from './App';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

class Summary4D extends App {

  chartRef = React.createRef();

  drawChart = () => {
    var g = new dagreD3.graphlib.Graph()
          .setGraph({})
          .setDefaultEdgeLabel(function() { return {}; });

    var gen1color = "#ddf";
    var gen2color = "#fdd";

        g.setNode("5_3_3",  { 
            label: "<a href=/star/#/polytope_5_3_3>{5, 3, 3}</a>"
            , color: gen1color
            });
        g.setNode("52_5_3",  { 
            label: "<a href=/star/#/polytope_52_5_3>{5/2, 5, 3}</a>"
            , color: gen1color
            });
        g.setNode("5_52_5",  { 
            label: "<a href=/star/#/polytope_5_52_5>{5, 5/2, 5}</a>"
            , color: gen1color
            });
        g.setNode("52_3_5",  { 
            label: "<a href=/star/#/polytope_52_3_5>{5/2, 3, 5}</a>"
            , color: gen1color
            });
        g.setNode("3_5_52",  { 
            label: "<a href=/star/#/polytope_3_5_52>{3, 5, 5/2}</a>"
            , color: gen1color
            });
        g.setNode("5_3_52",  { 
            label: "<a href=/star/#/polytope_5_3_52>{5, 3, 5/2}</a>"
            , color: gen2color
            });
        g.setNode("52_5_52",  { 
            label: "<a href=/star/#/polytope_52_5_52>{5/2, 5, 5/2}</a>"
            , color: gen2color
            });
        g.setNode("5_52_3",  { 
            label: "<a href=/star/#/polytope_5_52_3>{5, 5/2, 3}</a>"
            , color: gen2color
            });
        g.setNode("52_3_3",  { 
            label: "<a href=/star/#/polytope_52_3_3>{5/2, 3, 3}</a>"
            , color: gen2color
            });
        g.setNode("3_52_5",  { 
            label: "<a href=/star/#/polytope_3_52_5>{3, 5/2, 5}</a>"
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


        g.nodes().forEach(function(v) {
            var node = g.node(v);
            node.rx = node.ry = 10;
            node.width = 70;
            node.height = 20;
            node.alignmentBaseline = "center";
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

        render(inner, g);

        var xCenterOffset = (svgCanvas.attr("width") - g.graph().width) / 2;
        inner.attr("transform", "translate(" + xCenterOffset + ", 20)");
        svgCanvas.attr("height", g.graph().height + 40);
  };


  componentDidMount() {
    this.drawChart();
  }


  constructor(props) {
    super(props);

    this.state.content = (<div>
        <h4>Relationship among the 120-cell and the 9 stellations</h4>

        <div>
        Among the 10 star polytopes in 4D, 9 can be constructed by stellating the 
        120-cell, 1 can be constructed by stellating the 600-cell. Let us 
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
        the other cells with the same edge arrangement</span>. <span style={{color: "purple"}}>The 
        purple arrow means taking the convex hull of cells
        so that star polyhedra become convex polyhedra</span>. 
        </div>
        <br/>
        <div>
        <span style={{backgroundColor: "#ddf"}}>The nodes with light blue background 
         represent polytopes in the first generation</span>. <span style={{backgroundColor: "#fdd"}}>
        The nodes with light red background 
        represent polytopes in the second generation</span>. 
        </div>
        <br/>
        <div>
        One may see that the structure between the nodes and 
        the edges in first and the second generations 
        are the same. If you explode a polytope in the second generation partially,
        at some point, it becomes the counterpart in the first generation. The only
        exception is {'{'}3, 5, 5/2{'}'} and {'{'}3, 5/2, 5{'}'} because they
        don't have the same cells.
        </div>

        <h4>Categorized by edge arrangements</h4>

        <div>
        If we only consider the edges of the polytopes and look at them as wireframes, just
        like the vZome models,
        we see three groups. The polytopes in each group share the same edge arrangement.
        <ol>
        <li>
        {'{'}3, 3, 5{'}'}, {'{'}3, 5, 5/2{'}'}, {'{'}5, 5/2, 5{'}'}, {'{'}5, 3, 5/2{'}'}.
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


        <h4>Categorized by face arrangements</h4>

        <div>
        If we only consider the faces of the polytopes but ignore the cells,
        we see four pairs. Each pair of polytopes shares the same face arrangement.
        If two polytopes share the same face arrangement, they necessarily share the same
        edges. Actually, the four pairs belong to the first two groups of polytopes
        with the same edge arrangements.
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

