import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";

const styles = {
    sidebar: {
      width: 300
    },

    sidebarLink: {
      display: "block",
      padding: "16px 0px",
      color: "#757575",
      textDecoration: "none"
    },

    activeSidebarLink: {
      display: "block",
      padding: "16px 0px",
      color: "#757575",
      textDecoration: "none",
      backgroundColor: "#F0F0FF"
    },

    leftText: {
      textAlign: "left"
    },

    rightText: {
      float: "right"
    },

    divider: {
      margin: "8px 0",
      height: 1,
      backgroundColor: "#757575",
    },

    content: {
      padding: "16px",
      height: "100%",
      backgroundColor: "white"
    },

    dividerLine: {
      width: "100%", 
      textAlign: "center", 
      lineHeight: "0.1",
      backgroundColor: "#757575"
    },

    dividerText: { 
      color: "#757575",
      textDecoration: "none",
      background:"#fff",
      padding: "0px 10px 0px 10px"
    }
};

window.ref = React.createRef();

const SidebarContentRow = props => {
  if (props.currentPath.toLowerCase() === props.path.toLowerCase()){
    return (
        <Link to={props.path} style = {styles.activeSidebarLink}>
            <span ref={window.ref} style={styles.leftText}>{props.text}<span style={styles.rightText}>{props.rightText}</span></span>
        </Link>
      );
  } else {
    return (
        <Link to={props.path} style = {styles.sidebarLink}>
            <span style={styles.leftText}>{props.text}<span style={styles.rightText}>{props.rightText}</span></span>
        </Link>
      );
  }
};

const SidebarDividerRow = props => {
  return (
    <h2 style={styles.dividerLine}>
      <span style={styles.dividerText}>{props.text}</span>
    </h2>
  );
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  var links = (<div style={styles.content}>
        <SidebarContentRow path='/' currentPath={props.currentPath} text="Welcome"/>

        <SidebarDividerRow text="2D"/>
        <SidebarContentRow path='/pentagram' currentPath={props.currentPath} text="Pentagram" rightText="{5/2}"/>
        <SidebarContentRow path='/heptagram' currentPath={props.currentPath} text="Heptagrams" rightText="{7/2}, {7/3}"/>
        <SidebarContentRow path='/hexagram' currentPath={props.currentPath} text="Hexagram" rightText="{6/2}"/>
        
        <SidebarDividerRow text="3D"/>

        <SidebarContentRow path='/intro_3d' currentPath={props.currentPath} text="Overview of star polyhedra"/>
        <SidebarContentRow path='/polyhedron_5_3' currentPath={props.currentPath} text="Dodecahedron" rightText="{5, 3}"/>
        <SidebarContentRow path='/polyhedron_3_5' currentPath={props.currentPath} text="Icosahedron" rightText="{3, 5}"/>
        <SidebarContentRow path='/polyhedron_52_5' currentPath={props.currentPath} text="Small stellated dodecahedron" rightText="{5/2, 5}"/>
        <SidebarContentRow path='/polyhedron_5_52' currentPath={props.currentPath} text="Great dodecahedron" rightText="{5, 5/2}"/>
        <SidebarContentRow path='/polyhedron_52_3' currentPath={props.currentPath} text="Great stellated dodecahedron" rightText="{5/2, 3}"/>
        <SidebarContentRow path='/polyhedron_3_52' currentPath={props.currentPath} text="Great icosahedron" rightText="{3, 5/2}"/>
        <SidebarContentRow path='/summary_3d' currentPath={props.currentPath} text="Summary of star polyhedra"/>

        <SidebarDividerRow text="4D"/>
        <SidebarContentRow path='/intro_4d' currentPath={props.currentPath} text="Overview of 4D star polytopes"/>
        <SidebarContentRow path='/polytope_5_3_3' currentPath={props.currentPath} text="120-cell" rightText="{5, 3, 3}"/>
        <SidebarContentRow path='/polytope_3_3_5' currentPath={props.currentPath} text="600-cell" rightText="{3, 3, 5}"/>
        <SidebarContentRow path='/polytope_52_5_3' currentPath={props.currentPath} text="Small stellated 120-cell" rightText="{5/2, 5, 3}"/>
        <SidebarContentRow path='/polytope_5_52_5' currentPath={props.currentPath} text="Great 120-cell" rightText="{5, 5/2, 5}"/>
        <SidebarContentRow path='/polytope_52_3_5' currentPath={props.currentPath} text="Great stellated 120-cell" rightText="{5/2, 3, 5}"/>
        <SidebarContentRow path='/polytope_3_5_52' currentPath={props.currentPath} text="Icosahedral 120-cell" rightText="{3, 5, 5/2}"/>

        <SidebarContentRow path='/polytope_5_3_52' currentPath={props.currentPath} text="Grand 120-cell" rightText="{5, 3, 5/2}"/>
        <SidebarContentRow path='/polytope_52_5_52' currentPath={props.currentPath} text="Grand stellated 120-cell" rightText="{5/2, 5, 5/2}"/>
        <SidebarContentRow path='/polytope_5_52_3' currentPath={props.currentPath} text="Great grand 120-cell" rightText="{5, 5/2, 3}"/>
        <SidebarContentRow path='/polytope_52_3_3' currentPath={props.currentPath} text="Great grand stellated 120..." rightText="{5/2, 3, 3}"/>
        <SidebarContentRow path='/polytope_3_52_5' currentPath={props.currentPath} text="Great icosahedral 120-cell" rightText="{3, 5/2, 5}"/>
        <SidebarContentRow path='/polytope_3_3_52' currentPath={props.currentPath} text="Grand 600-cell" rightText="{3, 3, 5/2}"/>
        <SidebarContentRow path='/summary_4d' currentPath={props.currentPath} text="Summary of 4D star polytopes"/>
        <SidebarContentRow path='/polytope_data' currentPath={props.currentPath} text="4D polytope data set"/>
        
        <SidebarDividerRow text="Hyperbolic"/>
        <SidebarContentRow path='/hyperbolic_7_3' currentPath={props.currentPath} text="Heptagonal tiling" rightText="{7, 3}"/>
        <SidebarContentRow path='/hyperbolic_3_7' currentPath={props.currentPath} text="Order-7 triangular tiling" rightText="{3, 7}"/>
        <SidebarContentRow path='/hyperbolic_72_7' currentPath={props.currentPath} text="Order-7 heptagrammic tiling" rightText="{7/2, 7}"/>
        <SidebarContentRow path='/hyperbolic_7_72' currentPath={props.currentPath} text="Heptagrammic-order heptag..." rightText="{7, 7/2}"/>

        <SidebarDividerRow text="nD"/>
        <SidebarContentRow path='/complete_list' currentPath={props.currentPath} text="All regular star polytopes"/>
      </div>);


  return (
    <MaterialTitlePanel title="Menu" style={style}>
      {links}
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
