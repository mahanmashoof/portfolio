import React from 'react';
import './SlideDrawer.css';
import {Link} from 'react-router-dom';

function SlideDrawer(props) {
  return (<div>
    <nav className="slide-drawer">
      <ul>
        <Link to="/mecheng" onClick={props.drawerClickHandler}>
          <li><h4>Mech Engineering</h4></li>
        </Link>
        <Link to="/projects" onClick={props.drawerClickHandler}>
          <li><h4>Hobby Projects</h4></li>
        </Link>
        <li>
          <button className="closing-button" onClick={props.drawerClickHandler}><h4>close</h4></button>
        </li>
      </ul>
    </nav>
  </div>);
}

export default SlideDrawer;
