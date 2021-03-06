import React from 'react';
import './Mech.css';

function MechTCTech() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Châtelet</h1>
      <img className="subroute-img" alt="" src="https://i.ibb.co/4jxFwG3/chatelet.jpg"></img>
      <p>As part of a test line for photovoltic cell manufacturing, this device was an induction-heated, two-step, vacuum sulfurizing furnace and one of the stations in a CIGS production line. Coated glass would enter this thermal evaporator to react with sulfur under rapid heating (hence induction) and medium vacuum. The image above represents a simple illustration of the furnace and how the glass substrate would enter.</p>

      <hr/>

      <h3>How doeas a CIGS solar cell work?</h3>
      <p>CIGS (Copper, Indium, Gallium, Selenide) is a process for thin film solar cell manufacturing technology described in this video:</p>
      <iframe className="subroute-img" title="cyclotron-video" width="560" height="315" src="https://www.youtube.com/embed/ZyqHtX7L-3A"></iframe>

      <hr/>

      <h3>My Contribution</h3>
      <p>As an engineer at <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.tctech.se/">TCTech</a> in 2009, I was responsible for mechanical design, development, and test of this production line station.</p>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://i.ibb.co/WGrRz2c/cigs.jpg"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>RTP (Rapid Thermal Processing) Oven</strong></p>
          <p>The aim of sulfurization during rapid heating was to minimize process cycle times and still maintain substrate uniformity. It was also considered a promising experiment method to eventually phase out cadmuim from the process.</p>
          <div className="left">
            <ul>
              <li>Design for repetitive medium vacuum applications</li>
              <li>Design with pneumatics and PLC integration</li>
              <li>Technical drawings, inspections, assembly and tests</li>
              <li>Oil-cooled blocks for minimal expansion</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://uploads-ssl.webflow.com/5a78a6284323220001d8b6ac/5ab00a91faec7512edf2b777_Sunflare_PanelTwisT.jpg"></img>
        </div>
      </div>
    </div>
    <div className="icons">
      <a target="_blank" rel="noopener noreferrer" href="https://www.tctech.se/"><img className="icon" alt="tctech-icon" src="https://tctech.se/wp-content/uploads/2019/03/sticky-tctech-black-retina-no-payoff.png"/></a>
    </div>
  </div>);
}

export default MechTCTech;
