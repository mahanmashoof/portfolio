import React from 'react';
import './SlideDrawer.css';

function SlideDrawer(props) {
  return (<div>
    <nav className="slide-drawer">
      <ul>
        <li>
          <a href="/webdev"><h3>Web Development</h3></a>
        </li>
        <li>
          <a href="/mecheng"><h3>Mechanical Engineering</h3></a>
        </li>
        <li>
          <a href="/hobbies"><h3>Hobbies</h3></a>
        </li>
        <li>
          <button className="closing-button" onClick={props.drawerClickHandler}><h4>close</h4></button>
        </li>
      </ul>
    </nav>
  </div>);
}

export default SlideDrawer;
