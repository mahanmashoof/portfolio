import React from 'react';
import './Projects.css';
import ProjectsCard from './../components/projects/ProjectsCard.js';
import ProjPicLinkData from './../data/ProjPicLinkData.jsx';

function Projects() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Personal Hobby Projects
        <span role="img" aria-label="hammer">🔨</span>
      </h1>
      <div className="row">
        <ProjectsCard dest={ProjPicLinkData[2].dest} imgSrc={ProjPicLinkData[2].imgSrc}/>
        <ProjectsCard dest={ProjPicLinkData[3].dest} imgSrc={ProjPicLinkData[3].imgSrc}/>
        <ProjectsCard dest={ProjPicLinkData[4].dest} imgSrc={ProjPicLinkData[4].imgSrc}/>
        <ProjectsCard dest={ProjPicLinkData[0].dest} imgSrc={ProjPicLinkData[0].imgSrc}/>
        <ProjectsCard dest={ProjPicLinkData[1].dest} imgSrc={ProjPicLinkData[1].imgSrc}/>
      </div>
    </div>
  </div>);
}

export default Projects;
