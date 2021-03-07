import React from 'react';
import './../App.scss';
import ProjectsCard from './../components/projects/ProjectsCard.js';
import {ProjPicLinkData} from './../data/local_api';

function Projects() {
  function mapProj(props) {
    return(
    <ProjectsCard key={props.id} dest={props.dest} imgSrc={props.imgSrc}/>
    )
  }
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Personal Hobby Projects
        <span role="img" aria-label="hammer">🔨</span>
      </h1>
      <div className="row route-row">
        {ProjPicLinkData.map(mapProj)}
      </div>
    </div>
  </div>);
}

export default Projects;
