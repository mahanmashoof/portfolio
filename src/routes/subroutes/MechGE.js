import React from 'react';
import './Mech.css';
// import MechPicLinkData from './../../data/MechPicLinkData.jsx';

function MechGE() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">GENtrace</h1>
      <img className="subroute-img" alt="" src="https://i.ibb.co/MN15X1F/gentrace.jpg"></img>
      <p>An initiative from GE Healthcare to develop their yet smallest cyclotron for PET scanning</p>

      <hr/>

      <h3>What is a cyclotron?</h3>
      <p>Simply a particle accelerator used in nuclear medicine, explanied in this short video:</p>
      <iframe className="subroute-img" title="cyclotron-video" width="560" height="315" src="https://www.youtube.com/embed/XpqdmGRqmw0"></iframe>

      <hr/>

      <h3>My Contribution</h3>
      <p>As a consultant at <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/">Prevas AB</a>, I was contracted by GE Healthcare 2013-2015</p>
      <p>My mission was to develop a new <strong>Side cabinet</strong> for the GENtrace cyclotron containing a <strong>Radio Frequency Unit</strong>, a <strong>Water Cooling Unit</strong>, and the rest of the control units needed for the cyclotron</p>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://www.nde-ed.org/EducationResources/HighSchool/Radiography/Graphics/Cyclotron.png"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>Radio Frequency Unit</strong></p>
          <p>An alternating high voltage device, creating an oscillating electric field that accelerates particles. For this module I worked closely with GE electrical team.</p>
          <div className="left">
            <ul>
              <li>Designed with aluminum sheet metal and complex welding solutions</li>
              <li>CFD modeling for air cooling</li>
              <li>FE Analysis on door due to usage of <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.evaluationengineering.com/home/article/13014317/emc-gaskets-sealing-against-emi-and-the-environment">Gaskets</a> for enhanced EMC shielding</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="explaining">
        <div className="center-image every-other-img">
          <img alt="" src="https://i.ibb.co/svnjb1s/ge-wcu.png"></img>
        </div>
        <div className="center-text description every-other-text">
          <p className="space"></p>
          <p><strong>Water Cooling Unit</strong></p>
          <p>Alternating high voltage means a lot of friction and hence the need of much cooling. The Water Cooling Unit is placed inside the Cabinet as a full servicable drawer and is connected by hoses to the back side of the cyclotron (pic) for further distribution. This unit was designed in cooperation with GE advanced engineering team.</p>
          <div className="left">
            <ul>
              <li>Designed for best possible servicability</li>
              <li>Solutions for leakage and condensation issues</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://i.ibb.co/ZgwJX9N/ge-sidecab-cad-small.png"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>Side cabinet and Flexible positioning solution</strong></p>
          <p>This cabinet managed to be both Lighter, Smaller and Cheaper than its previous model <a className="text-link" target="_blank" rel="noopener noreferrer" href="http://www3.gehealthcare.com/~/media/downloads/us/product/product-categories/moleculer%20imaging/pet%20radiopharmacy/cyclotrons/pt800%20cyclotron%20system%20data%20sheet%20rev3.pdf?Parent=%7B442067E1-C933-4B8E-8D5B-1DBC294ECE21%7D">(PETtrace)</a>. Reasons behind this accomplishment was the reduction of one of the main control units, much design with sheet aluminum + FE Analysis, and negotiation with new suppliers. On top, this cabinet is equipped with a telescopic cable- and hose canal, adjustable in 180° for maximum cabinet position flexibility for different hospital spaces.</p>
          <div className="left">
            <ul>
              <li>Low weight cabinet</li>
              <li>Good servicability in tight spaces</li>
              <li>Good position flexibility vs Cyclotron</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <h3>Installations at site</h3>
      <div className="row">
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/mhttsJR/IMG-1660.jpg"></img>
        </div>
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/Tvf9Y8g/gentrace1.png"></img>
        </div>
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/Ms3b4GF/gentrace4.jpg"></img>
        </div>
      </div>
    </div>
    <div className="icons">
      <a target="_blank" rel="noopener noreferrer" href="https://www.gehealthcare.com/"><img className="icon" alt="ge-icon" src="https://aatg.energy/wp-content/uploads/2016/03/general-electric-logo.png"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/"><img className="icon" alt="prevas-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-D_xL6yUfXXXdXEH2w8cgu4-NNGlLx15WMtJsVI8iwva267fU&usqp=CAU"/></a>
    </div>
  </div>);
}

export default MechGE;
