import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";

const styles = {
    sidebar: {
      width: 256
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
      background:"#fff"
    }
};

window.ref = React.createRef();

const SidebarContentRow = props => {
  if (props.currentPath.toLowerCase() === props.path.toLowerCase()){
    return (
        <Link to={props.path} style = {styles.activeSidebarLink}>
            <span  ref={window.ref}>{props.text}</span>
        </Link>
      );
  } else {
    return (
        <Link to={props.path} style = {styles.sidebarLink}>
            <span>{props.text}</span>
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
        <SidebarContentRow path='/pentagram' currentPath={props.currentPath} text="Pentagram"/>
        <SidebarContentRow path='/heptagram' currentPath={props.currentPath} text="Heptagrams"/>
        <SidebarContentRow path='/hexagram' currentPath={props.currentPath} text="Hexagram"/>
        
        <SidebarDividerRow text="3D"/>

        <SidebarContentRow path='/intro_3d' currentPath={props.currentPath} text="Overview of 3D star polyhedra"/>
        <SidebarContentRow path='/polyhedron_5_3' currentPath={props.currentPath} text="Dodecahedron"/>
        <SidebarContentRow path='/polyhedron_3_5' currentPath={props.currentPath} text="Icosahedron"/>
        <SidebarContentRow path='/polyhedron_52_5' currentPath={props.currentPath} text="Small stellated dodecahedron"/>
        <SidebarContentRow path='/polyhedron_5_52' currentPath={props.currentPath} text="Great dodecahedron"/>
        <SidebarContentRow path='/polyhedron_52_3' currentPath={props.currentPath} text="Great stellated dodecahedron"/>
        <SidebarContentRow path='/polyhedron_3_52' currentPath={props.currentPath} text="Great icosahedron"/>
        <SidebarContentRow path='/summary_3d' currentPath={props.currentPath} text="Summary of stellation in 3D"/>

        <SidebarDividerRow text="4D"/>
        <SidebarContentRow path='/intro_4d' currentPath={props.currentPath} text="Overview of 4D star polytopes"/>
        <SidebarContentRow path='/polytope_5_3_3' currentPath={props.currentPath} text="120-cell { 5, 3, 3 }"/>
        <SidebarContentRow path='/polytope_3_3_5' currentPath={props.currentPath} text="600-cell { 3, 3, 5 }"/>
        <SidebarContentRow path='/polytope_52_5_3' currentPath={props.currentPath} text="{ 5/2, 5, 3 }"/>
        <SidebarContentRow path='/polytope_5_52_5' currentPath={props.currentPath} text="{ 5, 5/2, 5 }"/>
        <SidebarContentRow path='/polytope_52_3_5' currentPath={props.currentPath} text="{ 5/2, 3, 5 }"/>
        <SidebarContentRow path='/polytope_3_5_52' currentPath={props.currentPath} text="{ 3, 5, 5/2 }"/>

        <SidebarContentRow path='/polytope_5_3_52' currentPath={props.currentPath} text="{ 5, 3, 5/2 }"/>
        <SidebarContentRow path='/polytope_52_5_52' currentPath={props.currentPath} text="{ 5/2, 5, 5/2 }"/>
        <SidebarContentRow path='/polytope_5_52_3' currentPath={props.currentPath} text="{ 5, 5/2, 3 }"/>
        <SidebarContentRow path='/polytope_52_3_3' currentPath={props.currentPath} text="{ 5/2, 3, 3 }"/>
        <SidebarContentRow path='/polytope_3_52_5' currentPath={props.currentPath} text="{ 3, 5/2, 5 }"/>
        <SidebarContentRow path='/polytope_3_3_52' currentPath={props.currentPath} text="{ 3, 3, 5/2 }"/>
        <SidebarContentRow path='/summary_4d' currentPath={props.currentPath} text="Summary of stellation in 4D"/>

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
