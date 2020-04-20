import React from 'react';
import './Projects.css';
import ProjectsCard from './../components/projects/ProjectsCard.js';

function Projects() {
  return (
    <div className="full-page">
      <div className="container">
        <h1 className="heading">Personal Hobby Projects</h1>
        <ProjectsCard />
        <pre>Material coming soon..</pre>
      </div>
    </div>
  );
}

export default Projects;
