import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks.js';
import NavButton from './NavButton.js';

function Nav(props) {
  return (<nav>
    <Link to="/portfolio-page">
      <p className="nav-home">Intro</p>
    </Link>
    <NavLinks />
    <NavButton click={props.drawerClickHandler} />
  </nav>);
}

export default Nav;
