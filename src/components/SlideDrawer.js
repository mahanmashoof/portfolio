import React from 'react';
import './SlideDrawer.css';
import {Link} from 'react-router-dom';

function SlideDrawer(props) {
  return (<div>
    <nav className="slide-drawer">
      <ul>
        <Link to="/webdev" onClick={props.drawerClickHandler}>
          <li><h4>Web development</h4></li>
        </Link>
        <Link to="/mecheng" onClick={props.drawerClickHandler}>
          <li><h4>Mechanical Engineering</h4></li>
        </Link>
        <Link to="/projects" onClick={props.drawerClickHandler}>
          <li><h4>Projects</h4></li>
        </Link>
        <li>
          <button className="closing-button" onClick={props.drawerClickHandler}><h4>close</h4></button>
        </li>
      </ul>
    </nav>
  </div>);
}

export default SlideDrawer;
