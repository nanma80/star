import React from "react";
import App from './App';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';

class Summary3D extends App {

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
          .setGraph({})
          .setDefaultEdgeLabel(function() { return {}; });

        g.setNode(0,  { 
            label: "<a href=/star/#/Polyhedron_5_3>Regular dodecahedron {5, 3}</a>"
            });
        g.setNode(1,  { 
            label: "<a href=/star/#/Polyhedron_52_5>Small stellated dodecahedron {5/2, 5}</a>"
            });
        g.setNode(2,  { 
            label: "<a href=/star/#/Polyhedron_5_52>Great dodecahedron {5, 5/2}</a>"
            });
        g.setNode(3,  { 
            label: "<a href=/star/#/Polyhedron_52_3>Great stellated dodecahedron {5/2, 3}</a>"
            });

        g.setEdge(0, 1, {color: "red"});
        g.setEdge(1, 2, {color: "blue"});
        g.setEdge(2, 3, {color: "red"});


        g.nodes().forEach(function(v) {
            var node = g.node(v);
            node.rx = node.ry = 10;
            node.width = 280;
            node.height = 30;
            node.labelType = "html";
            node.style = "fill: #ddf; font-weight: bold";
        });

        g.edges().forEach(function(e) {
            var edge = g.edge(e);
            edge.labelStyle = "fill: " + edge.color;
            edge.style = "stroke-width: 2px; stroke: " + edge.color;
            edge.arrowheadStyle = "fill: " + edge.color;
        });

        var render = new dagreD3.render();
        var svgCanvas = d3.select(this.chartRef.current)
            .append("svg")
            .attr("width", 300)
            .attr("height", 400);
        var inner = svgCanvas.append("g");

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
  }


  constructor(props) {
    super(props);

    this.state.content = (<div>
        <h4>Relationship among the convex dodecahedron and the three stellations</h4>

        <div>
        Before moving on to 4D, let us summarize the stellation process among 
        the four star polyhedra. Except for the great icosahedron, which is a 
        stellated icosahedron,
        the other 
        three polyhedra can be constructed by stellating the regular dodecahedron.
        The relationship among the dodecahedron and the stellations can be summarized 
        as follows.
        </div>

        <div ref={this.chartRef} className = 'chart-div'></div>
        <figcaption>
            Connections among the dodecahedron and its stellations.
        </figcaption>

        <br/>
        <div>
        In this
        chart, <span style={{color: "red"}}>the red arrows mean extending edges 
        so that a pentagon becomes a pentagram</span>. <span style={{color: "blue"}}>The 
        blue arrow means taking the convex hull
        so that a pentagram becomes a pentagon</span>.
        </div>
        <br/>
        <div>
        In the names of the star polyhedra,
        the word "stellated" refers to the the process of extending edges (the red arrows). 
        The word "great" refers to replacing faces by larger faces in the same plane (the blue arrow).
        The "great stellated dodecahedron" has its name because you need to stellate the great dodecahedron
        to construct it.
        </div>


        <br/>
        <div>
        If we start from a dodecahedron and focus on one of the faces, we can
        construct the faces of the stellated polyhedra in the image below.
        <div className = "figure-div">
        <figure>
            <img src = {require('./images/polygon/pentagram_inside_outside_2.png')} alt = 'static'/>
            <figcaption>Connections among the faces of 
            <br/>the dodecahedron and its stellations</figcaption>
        </figure>
        </div>

        <ul>
        <li>
        The face of the dodecahedron is the red pentagon in the middle. 
        </li>
        <li>
        In the first
        stellation, we extend the edges to form the blue pentagram. The polyhedron is 
        the small stellated dodecahedron.
        </li>
        <li>
        In the second
        stellation, we construct the convex hull of the blue pentagram to get
        the yellow pentagon. The polyhedron is 
        the great dodecahedron.
        </li>
        <li>
        In the third
        stellation, we extend the edges of the yellow pentagon to form the purple
        pentagram. The polyhedron is 
        the great stellated dodecahedron.
        </li>
        </ul>
        </div>

        <div>
        See the following images for the whole polyhedra. In each stellation image,
        I am only showing the extension or addition of one vertex or one face to keep
        the image simple.
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/pov_whole_Dodecahedron.png')} alt = 'static'/>
            <figcaption>Step 0: <Link to='/Polyhedron_5_3'>regular dodecahedron</Link></figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Dodecahedron/stellated_dodecahedron.png')} alt = 'static'/>
            <figcaption>From 0 to 1: stellating the dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 1: <Link to='/Polyhedron_52_5'>small stellated dodecahedron {'{'}5/2, 5{'}'}</Link></figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/stellated_dodecahedron_4.png')} alt = 'static'/>
            <figcaption>From 1 to 2: stellating the small stellated dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 2: <Link to='/Polyhedron_5_52'>great dodecahedron {'{'}5, 5/2{'}'}</Link></figcaption>
        </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/GreatDodecahedron/stellated_dodecahedron_3.png')} alt = 'static'/>
            <figcaption>From 2 to 3: stellating the great dodecahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatStellatedDodecahedron/pov_whole_GreatStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Step 3: <Link to='/Polyhedron_52_3'>great stellated dodecahedron {'{'}5/2, 3{'}'}</Link></figcaption>
        </figure>
        </div>


        <div>
        At the end, I'd like to mention the great icosahedron. It is the only stellation 
        of the regular icosahedron as a regular star polyhedron. If you choose to 
        stellate the icosahedron in other ways, you may get star polyhedra with 
        non-regular faces, or non-regular vertex figures, or a compound.
        </div>

        <h4>Categorized by edge arrangements</h4>
        <div>
        If we only consider the edges of the polyhedra, we see that the convex regular icosahedron and the great dodecahedron are the same.
        Their difference is in the faces. They share the same edge arrangement.
        </div>
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/Icosahedron/pov_wireframe_Icosahedron.png')} alt = 'static'/>
                <figcaption>The common wireframe shared by the icosahedron and the great dodecahedron</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/Icosahedron/pov_whole_Icosahedron.png')} alt = 'static'/>
            <figcaption>Icosahedron</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatDodecahedron/pov_whole_GreatDodecahedron.png')} alt = 'static'/>
            <figcaption>Great dodecahedron {'{'}5, 5/2{'}'}</figcaption>
        </figure>
        </div>
        <div>
        Similarly, the small stellated dodecahedron and the great icosahedron share the same edge arrangement.
        </div>
        <div className = "figure-div">
            <figure>
                <img src = {require('./images/SmallStellatedDodecahedron/pov_wireframe_SmallStellatedDodecahedron.png')} alt = 'static'/>
                <figcaption>The common wireframe shared by the small stellated dodecahedron and the great icosahedron</figcaption>
            </figure>
        </div>

        <div className = "figure-div">
        <figure>
            <img src = {require('./images/SmallStellatedDodecahedron/pov_whole_SmallStellatedDodecahedron.png')} alt = 'static'/>
            <figcaption>Small stellated dodecahedron {'{'}5/2, 5{'}'}</figcaption>
        </figure>
        <figure>
            <img src = {require('./images/GreatIcosahedron/pov_whole_GreatIcosahedron.png')} alt = 'static'/>
            <figcaption>Great icosahedron {'{'}3, 5/2{'}'}</figcaption>
        </figure>
        </div>
	</div>)
    ;

    this.state.contentHeader = (<span>Summary of star polyhedra</span>)
  }
}

export default Summary3D;

