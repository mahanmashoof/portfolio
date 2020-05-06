import React from 'react';
import './Mech.css';
// import MechPicLinkData from './../../data/MechPicLinkData.jsx';

function MechOrgentec() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Alegria II</h1>
      <img className="subroute-img" alt="" src="https://i.ibb.co/mRPvLCF/alegria.jpg"></img>
      <p>A project for Orgentec Diagnostika, a German manufacturer of laboratory test systems. Alegria is a device for autoimmune disease diagnostics and infection serology. Project Alegria II is a redesign of Alegria for enhanced testing capacity, better automatizations and improved patient sample handling.</p>

      <hr/>

      <h3>What is serology?</h3>
      <p>When someone gets infected by e.g. a virus or bacteria (or even in case of autoimmune diseases), the body starts to produce antibodies as a response to that incoming alien protein. By analysing a patient's relevant body-fluid (blood, urine, etc) a machine like Alegria could through automatic chemical process sequences, diagnose a known illnes by detection of antibodies in a specifik patient body-fluid. This video shows an example of how it can be done through an ELISA method:</p>
      <iframe className="subroute-img" title="cyclotron-video" width="560" height="315" src="https://www.youtube.com/embed/zR_xlV5v_f4"></iframe>

      <hr/>

      <h3>My Contribution</h3>
      <p>As a consultant at <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/">Prevas AB</a>, I was part of the Alegria II project 2016-2017</p>
      <p>My direct responsibility was designing the machine's <strong>Liquid distribution unit</strong> and the <strong>Strip loading unit</strong>. I also contributed to the <strong>Sample loading unit</strong> and made a timing-flow analysis for the whole system, which means automatization of the steps in above video.</p>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://i.ibb.co/4TgCspV/alegria2-LDU-small.jpg"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>Liquid Distribution Unit</strong></p>
          <p>Equipped with valves and pumps, this module acts similar to a heart for the instrument, dispensing the exact amount of the correct liquid, with micro-liter precision, at the correct location on the right time.</p>
          <div className="left">
            <ul>
              <li>Mechanical representation of an advanced timing-flow diagram that automatically covers all steps and processes</li>
              <li>Close cooperation with suppliers for optimal choise of valves</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="explaining">
        <div className="center-image every-other-img">
          <img alt="" src="https://i.ibb.co/SK8Skd3/strip-loader1.jpg"></img>
        </div>
        <div className="center-text description every-other-text">
          <p className="space"></p>
          <p><strong>Strip Loading Unit</strong></p>
          <p>Here the <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST-RnCFoSl9eldaNBDayKiX0OUxDaacOp6-cSB5m9aaWn4UCG7&usqp=CAU">strips</a> are loaded for entrance into de machine. They consist each of eight wells containing reagents and coatings necessary for different analysis.</p>
          <div className="left">
            <ul>
              <li>Strip load capacity increased from 30 (Alegria) to 800</li>
              <li>Designed mainly with sheet metal and injection molded plastic</li>
              <li>Automatic scanning of strips</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="explaining">
        <div className="center-image">
          <img alt="" src="https://i.ibb.co/HV3SZV4/Sample-loader1.jpg"></img>
        </div>
        <div className="center-text description">
          <p className="space"></p>
          <p><strong>Sample Loading Unit</strong></p>
          <p>Here liquid sample tubes from patients are placed in a rack to be automatically fed into the machine and scanned. A pipetting robot will then aspire the samples for targeted mixing in a process station.</p>
          <div className="left">
            <ul>
              <li>Designed mainly with sheet metal and reinforced injection molded plastic</li>
              <li>Automatic scanning of test tubes</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <p>Project still in development</p>
    </div>
    <div className="icons">
      <a target="_blank" rel="noopener noreferrer" href="https://www.orgentec.com/en/"><img className="icon" alt="orgentec-icon" src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_120,w_120,f_auto,b_white,q_auto:eco/v1409282173/djrdnf55ozwl73re2lew.png"/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.prevas.se/"><img className="icon" alt="prevas-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-D_xL6yUfXXXdXEH2w8cgu4-NNGlLx15WMtJsVI8iwva267fU&usqp=CAU"/></a>
    </div>
  </div>);
}

export default MechOrgentec;
