import React from 'react';
import './MechanicalEngineering.css';
import MechEngCard from './../components/mecheng/MechEngCard.js';
import MechPicLinkData from './../data/MechPicLinkData.jsx';

function MechanicalEngineering() {

  function subRoutes(routeLink) {
    return <MechEngCard key={routeLink.id} dest={routeLink.dest} imgSrc={routeLink.imgSrc}/>
  }

  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Achievments in Mechanical Engineering
        <span role="img" aria-label="gear">⚙️</span>
      </h1>
      <div className="row">
        {MechPicLinkData.map(subRoutes)}
      </div>
    </div>
  </div>);
}

export default MechanicalEngineering;
