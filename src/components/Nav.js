import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks.js';
import NavButton from './NavButton.js';

function Nav(props) {
  return (<nav>
    <Link to="/">
      <p className="nav-home">{'{webDev}'}</p>
    </Link>
    <NavLinks />
    <NavButton click={props.drawerClickHandler} />
  </nav>);
}

export default Nav;
