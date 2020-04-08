import React from 'react';
import './NavButton.css';

function NavButton(props) {
  return (<div>
    <button className="nav-button" onClick={props.click}>
      <div className="nav-button-line"/>
      <div className="nav-button-line"/>
      <div className="nav-button-line"/>
    </button>
  </div>);
}

export default NavButton;
