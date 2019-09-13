import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

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

        return (
            <div>
            <br/>
              <div>
              Contents:
              </div>
              <ul>
              {toc}
              </ul>
            </div>
        );

      }
    }
}

export default TableOfContents;

