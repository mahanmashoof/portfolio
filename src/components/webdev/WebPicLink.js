import React from "react";
import "./WebPicLink.css";

function WebPicLinks(props) {
  return (
    <div className="col-12 col-md-12">
      <div className="web-proj-link">
        <a
          className="web-proj-link-pic"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="webdev-img" alt="" src={props.imgSrc}></img>
        </a>
        <div className="web-icon-descr">
          <div>
            <p className="web-icon-descr-text">{props.descr}</p>
            <p className="web-icon-descr-text" style={{ color: "#0CC79A" }}>{props.tech}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WebPicLinks;
