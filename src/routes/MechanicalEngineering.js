import React from "react";
import "./../App.scss";
import MechEngCard from "./../components/mecheng/MechEngCard.js";
import { MechPicLinkData } from "./../data/local_api";

function MechanicalEngineering() {
  function subRoutes(props) {
    return (
      <MechEngCard key={props.id} dest={props.dest} imgSrc={props.imgSrc} />
    );
  }

  return (
    <div className="full-page">
      <div className="container">
        <h1 className="heading">
          Achievments in Mechanical Engineering
          <span role="img" aria-label="gear">
            ⚙️
          </span>
        </h1>
        <div className="row route-row">
          {MechPicLinkData.slice(0).reverse().map(subRoutes)}
        </div>
      </div>
    </div>
  );
}

export default MechanicalEngineering;
