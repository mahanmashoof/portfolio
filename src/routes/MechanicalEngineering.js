import React from 'react';
import './MechanicalEngineering.css';
import MechEngCard from './../components/mecheng/MechEngCard.js';

function MechanicalEngineering() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Achievments in Mechanical Engineering
        <span role="img" aria-label="gear">⚙️</span>
      </h1>
      <div className="row">
        <MechEngCard />
        <MechEngCard />
        <MechEngCard />
      </div>
      <pre>Material coming soon..</pre>
    </div>
  </div>);
}

export default MechanicalEngineering;
