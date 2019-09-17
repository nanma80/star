import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './table_of_contents.css';

class TableOfContents extends React.Component {
    render() {
      if (this.props.list.length === 0) {
        return (<div/>);
      } else {
        const toc = this.props.list.map(
            (item) => {
              const toLink = "#" + item[0];
              return (
                <li key={item[1]}>
                  <Link smooth to={toLink}>{item[1]}</Link>
                </li>
                );
            }
          );
        var className = "table-of-contents " 
          + (
            this.props.tableOfContentsOnSide 
            ? "table-of-contents-on-side" 
            : "table-of-contents-inline"
            );

        return (
            <div className = {className}>
              <span>
              Contents:
              </span>
              <ul>
              {toc}
              </ul>
            </div>
        );

      }
    }
}

export default TableOfContents;

