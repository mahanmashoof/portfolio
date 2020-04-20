import React from "react";
import './WebPicLink.css';

function WebPicLinks(props) {
  return (<div className="col-12 col-md-6">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img className="webdev-img" alt="" src={props.imgSrc}></img>
    </a>
  </div>);
}

export default WebPicLinks
