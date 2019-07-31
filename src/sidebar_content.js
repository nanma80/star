import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
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
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <Link to='/' style={styles.sidebarLink}> 
          Home
        </Link>
        <div style={styles.divider}>2D:</div>
        <Link to='/pentagram' style={styles.sidebarLink}> 
          Pentagram
        </Link>
        
        <div style={styles.divider}>3D:</div>
        <Link to='/polyhedron_5_3' style={styles.sidebarLink}> 
          Dodecahedron
        </Link>
        <Link to='/polyhedron_3_5' style={styles.sidebarLink}> 
          Icosahedron
        </Link>
        <Link to='/polyhedron_52_5' style={styles.sidebarLink}> 
          Small stellated dodecahedron
        </Link>
        <Link to='/polyhedron_5_52' style={styles.sidebarLink}> 
          Great dodecahedron
        </Link>
        <Link to='/polyhedron_52_3' style={styles.sidebarLink}> 
          Great stellated dodecahedron
        </Link>
        <Link to='/polyhedron_3_52' style={styles.sidebarLink}> 
          Great icosahedron
        </Link>

        <div style={styles.divider}>4D:</div>

      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
