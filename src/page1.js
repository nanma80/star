import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./material_title_panel";
import SidebarContent from "./sidebar_content";

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class Page1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  mediaQueryChanged() {
    this.setState({
      docked: mql.matches,
      open: false
    });
  }

  toggleOpen(ev) {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    console.log("rendering page1.js");
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="/#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> Star Polytopes </span>
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <p>
              content of page 1
            </p>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default Page1;

