import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

function NavLinks() {
  return(
    <div>
      <ul className="nav-links">
        <Link to="/mecheng">
          <li className="nav-link">Mech Engineering</li>
        </Link>
        <li className="nav-link">|</li>
        <Link to="/projects">
          <li className="nav-link">Hobby Projects</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLinks;
