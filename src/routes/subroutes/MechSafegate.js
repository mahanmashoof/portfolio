import React from 'react';
import './Mech.css';

function MechSafegate() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">IDM 2051</h1>
      <img className="subroute-img" alt="" src="https://i.ibb.co/7RMd8jf/airfield-lights.jpg"></img>
      <p>IDM2051 was an approach lighting used in airport runways as a guide for landing airplanes</p>

      <hr/>

      <h3>How does runway lightings work?</h3>
      <p>Inset runway lightings (such as IDM2051) are high intensity, non-elevated lamps. This means they are installed mostly buried into special metal casings, only having their surface at ground level.These systems are rough structures that need to work in any weather with minimum maintenance. Their light is directed towards landing airplanes in order to light up different segments of the runway in a structured way. Watch this this video to take a closer look on this system:</p>
      <iframe className="subroute-img" title="lighting-video" width="560" height="315" src="https://www.youtube.com/embed/9F8eGl85JtA"></iframe>

      <hr/>

      <h3>My Contribution</h3>
      <p>As a consultant at <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/">Prevas AB</a>, I was contracted by Safegate 2011-2012</p>
      <p>The IDM2051 was being equipped with new LED lights and needed a <strong>Faceted reflector</strong> for better illumination and some changes to its housing including <strong>Heat shielding</strong> and a custom shaped <strong>PCB</strong></p>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://i.ibb.co/YQmSX6r/idm2051.png"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>Lighting Housing</strong></p>
          <p>The upgradings of IDM2051 were mostly designed and experimented at Safegate Helsinki office and partly in cooperation with University of Helsinki Physics department.</p>
          <div className="left">
            <ul>
              <li>Design and manufaturing of a custom made faceted reflector</li>
              <li>Redesigned parts of the light housing</li>
              <li>Reshaping and heat protection of lighting PCB</li>
              <li>Upgrading of documentations and manuals</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/JpbtnrT/safegate1.png"></img>
        </div>
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/fdnkdZ0/safegate2.png"></img>
        </div>
        <div className="col-12 col-md-4">
          <img className="mecheng__img" alt="" src="https://i.ibb.co/0K4CJTv/safegate3.png"></img>
        </div>
      </div>
    </div>
    <div className="icons">
      <a target="_blank" rel="noopener noreferrer" href="https://adbsafegate.com/"><img className="icon" alt="safegate-icon" src="https://blog.adbsafegate.com/wp-content/uploads/logo640x400-2.jpg"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.helsinki.fi/en"><img className="icon" alt="UoH-icon" src="https://pbs.twimg.com/profile_images/1070598846814830592/MmWyejc5_400x400.jpg"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/"><img className="icon" alt="prevas-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-D_xL6yUfXXXdXEH2w8cgu4-NNGlLx15WMtJsVI8iwva267fU&usqp=CAU"/></a>
    </div>
  </div>);
}

export default MechSafegate;
