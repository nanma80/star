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
    backgroundColor: "#757575"
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
        <a href={process.env.PUBLIC_URL + '/'} style={styles.sidebarLink}>
          Home
        </a>
        <Link to={process.env.PUBLIC_URL + '/page1'}  style={styles.sidebarLink}> 
          Link: Click me page 1
        </Link>
        <div style={styles.divider} />
        <Link to={process.env.PUBLIC_URL + '/page1'}  style={styles.sidebarLink}> 
          Link 2: Click me page 1
        </Link>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
