import React from "react";

import "./Header.css";

const Header = ({isListView, onChange}) => (
  <nav className="nav-wrapper red lighten-2 white-text">
    <a className="brand-logo center">React users</a>
    <ul className="hide-on-med-and-down">
    <button onClick={onChange}>{isListView ? 'grid' : 'list'}</button>
    </ul>
  </nav>
)


;

export { Header };
