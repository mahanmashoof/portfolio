import React from 'react';
import './ProjectsCard.css';
import {Link} from 'react-router-dom';

function ProjectsCard(props) {  
  return (<div className="col-12 col-md-6">
    <Link to={props.dest}><img className="projects__img" alt="" src={props.imgSrc}/></Link>
  </div>);
}

export default ProjectsCard;
