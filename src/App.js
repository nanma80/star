import React from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./material_title_panel";
import SidebarContent from "./sidebar_content";
import TableOfContents from "./table_of_contents";
import './App.css';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  },
  footer: {
    "textAlign": "right", 
    padding: 15
  }
};

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: mql.matches,
      open: false,
      content: "default content",
      contentHeader: (<span> Star Polytopes </span>)
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

  componentDidMount() {
    if (window.ref.current !== null) { 
      window.ref.current.scrollIntoView({block: "center"});
    };
  }


  render() {
    const sidebar = <SidebarContent currentPath={this.props.location.pathname}/>;

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.toggleOpen}
            href="/#"
            style={styles.contentHeaderMenuLink}
          >
          <i className="material-icons">menu</i>
          </a>
        )}
        {this.state.contentHeader}
      </span>
    );

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    const content = (<div style={styles.content}>
            {this.state.content}
          </div>);

    var h4Tags = content.props.children.props.children
      .filter((item)=>{return item.type === 'h4'});
    
    var h4TagsMissingIds = content.props.children.props.children
      .filter((item)=>{return item.type === 'h4' && item.props.id === undefined});

    if(h4TagsMissingIds.length > 0) {
      console.log("h4Tags missing id!");
    }

    var h4TagsProps = h4Tags.map((item) => {return [item.props.id, item.props.children]});

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div>
          <TableOfContents list={h4TagsProps}/>
          {content}
          {!this.state.docked && (
            <div style={styles.footer}>
            <a onClick={this.toggleOpen} href="/#" >
              Open menu
            </a>
            </div>
          )}
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}

export default App;
