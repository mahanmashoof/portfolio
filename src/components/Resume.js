import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (<div className="row">
    <div className="col">
      <a href="./../Resume_Mahan_Mashoof_Eng.doc" type="button" className="btn btn-dark btn-block" download><FontAwesomeIcon className="icon" icon={faDownload} size="1x"/>Resume (Eng)</a>
    </div>
    <div className="col">
      <a href="./../Currículo_Mahan_Mashoof_Por.doc" type="button" className="btn btn-dark btn-block" download><FontAwesomeIcon className="icon" icon={faDownload} size="1x"/>Currículo (Por)</a>
    </div>
  </div>);
}

export default Resume;
