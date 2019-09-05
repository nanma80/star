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
    margin: "8px 0",
    backgroundColor: "#757575"
  },

  dividerText: { 
    color: "#757575",
    textDecoration: "none",
    background:"#fff",
    padding:"0 10px"
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
          Welcome
        </Link>
        <h2 style={styles.dividerLine}><span style={styles.dividerText}>2D</span></h2>
        <Link to='/pentagram' style={styles.sidebarLink}> 
          Pentagram
        </Link>
        <Link to='/heptagram' style={styles.sidebarLink}> 
          Heptagrams
        </Link>
        <Link to='/hexagram' style={styles.sidebarLink}> 
          Hexagram
        </Link>
        
        <h2 style={styles.dividerLine}><span style={styles.dividerText}>3D</span></h2>
        <Link to='/intro_3d' style={styles.sidebarLink}> 
          Overview of 3D star polyhedra
        </Link>
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
        <Link to='/summary_3d' style={styles.sidebarLink}> 
          Summary of stellation in 3D
        </Link>
        <h2 style={styles.dividerLine}><span style={styles.dividerText}>4D</span></h2>
        <Link to='/intro_4d' style={styles.sidebarLink}> 
          Overview of 4D star polytopes
        </Link>
        <Link to='/polytope_5_3_3' style={styles.sidebarLink}> 
          120-cell
        </Link>
        <Link to='/polytope_3_3_5' style={styles.sidebarLink}> 
          600-cell
        </Link>
        <Link to='/polytope_52_5_3' style={styles.sidebarLink}> 
          {'{'} 5/2, 5, 3 {'}'}
        </Link>
        <Link to='/polytope_5_52_5' style={styles.sidebarLink}> 
          {'{'} 5, 5/2, 5 {'}'}
        </Link>
        <Link to='/polytope_52_3_5' style={styles.sidebarLink}> 
          {'{'} 5/2, 3, 5 {'}'}
        </Link>

        <Link to='/polytope_3_5_52' style={styles.sidebarLink}> 
          {'{'} 3, 5, 5/2 {'}'}
        </Link>

        <Link to='/polytope_5_3_52' style={styles.sidebarLink}> 
          {'{'} 5, 3, 5/2 {'}'}
        </Link>
        <Link to='/polytope_52_5_52' style={styles.sidebarLink}> 
          {'{'} 5/2, 5, 5/2 {'}'}
        </Link>
        <Link to='/polytope_5_52_3' style={styles.sidebarLink}> 
          {'{'} 5, 5/2, 3 {'}'}
        </Link>
        <Link to='/polytope_3_52_5' style={styles.sidebarLink}> 
          {'{'} 3, 5/2, 5 {'}'}
        </Link>
        <Link to='/polytope_3_3_52' style={styles.sidebarLink}> 
          {'{'} 3, 3, 5/2 {'}'}
        </Link>
        <Link to='/polytope_52_3_3' style={styles.sidebarLink}> 
          {'{'} 5/2, 3, 3 {'}'}
        </Link>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
