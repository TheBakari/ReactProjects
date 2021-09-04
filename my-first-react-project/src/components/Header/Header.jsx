import React from 'react';

import './Header.css';

 const Header = ({ name, onUserSwitch }) =>( //jedan od nacina jeste export const Header 
    
        // <header className='header'>
        //     <p>My React Blog</p>
        // </header>

        
            <nav className=" header  ">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 title h1">My React Blog</span>
                <p>{name}</p>
                <button onClick={onUserSwitch}>Switch User</button>
            </div>
            </nav>
    
);

export{Header};