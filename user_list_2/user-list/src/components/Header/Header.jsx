import React from "react";

 export const Header= ({onLayOutToggle,isListView}) =>{
     const buttonText=isListView ? 'Grid Layout' : 'List Layout';
    return(
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">React Users</a>
          <ul className="right hide-on-med-and-down">
            <li>
                <button onClick={onLayOutToggle} className="waves-effect waves-light btn">{buttonText}</button>
            </li>
          </ul>
        </div>
      </nav>
    );
};