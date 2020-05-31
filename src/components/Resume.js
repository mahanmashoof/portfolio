import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (<div id="resume" className="row">
    <div className="col">
      <a href="./../CV_Mahan_Mashoof_Eng.doc" type="button" className="btn btn-dark btn-block" download><FontAwesomeIcon className="icon" icon={faDownload} size="1x"/>Resume Engineering</a>
    </div>
    <div className="col">
      <a href="./../Resume_Mahan_Mashoof_web.doc" type="button" className="btn btn-dark btn-block" download><FontAwesomeIcon className="icon" icon={faDownload} size="1x"/>Resume Web development</a>
    </div>
  </div>);
}

export default Resume;
