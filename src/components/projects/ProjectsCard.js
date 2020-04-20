import React from 'react';
import './ProjectsCard.css';

function ProjectsCard(props) {
  return (<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>front page left</p>
          </div>
          <div className="col-12 col-md-6">
            <p>front page right</p>
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        <div className="row">
          <div className="col-12 col-md-6">
            <p>back page left</p>
          </div>
          <div className="col-12 col-md-6">
            <p>back page right</p>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default ProjectsCard;
