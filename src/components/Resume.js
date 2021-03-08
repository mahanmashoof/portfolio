import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (<div id="resume" className="row">
    <div className="col cv-button-parent">
      <a href="./../Resume_Mahan_Mashoof.docx" type="button" className="btn btn-dark btn-block" download id='cv-button'><FontAwesomeIcon className="icon" icon={faDownload} size="1x"/>Download My Resume</a>
    </div>
  </div>);
}

export default Resume;
