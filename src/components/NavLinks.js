import React from 'react';
import './../App.css';
import {Link} from 'react-router-dom';

function NavLinks() {
  return(
    <div>
      <ul className="nav-links">
        <Link to="/portfolio-page/webdev">
          <li className="nav-link">Web development</li>
        </Link>
        <li className="nav-link">|</li>
        <Link to="/portfolio-page/mecheng">
          <li className="nav-link">Mechanical Engineering</li>
        </Link>
        <li className="nav-link">|</li>
        <Link to="/portfolio-page/hobbies">
          <li className="nav-link">Hobbies</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLinks;
