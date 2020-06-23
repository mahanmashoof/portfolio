import React from 'react';
import './../App.css';
import WebPicLink from './../components/webdev/WebPicLink.js';
import WebPicLinkData from './../data/WebPicLinkData.jsx';

function WebDevelopment() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Web Development projects<span role="img" aria-label="web">🕸️</span></h1>
      <div className="icons">
        <img className="icon" alt="js" src="https://www.ioanavladau.com/imgs/circle-js-v2.png"/>
      </div>
      <div className="row route-row">
        <WebPicLink url={WebPicLinkData[3].url} imgSrc={WebPicLinkData[3].imgSrc}/>
      </div>
      <div className="icons">
        <img className="icon" alt="react" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"/>
      </div>
      <div className="row route-row">
        <WebPicLink url={WebPicLinkData[4].url} imgSrc={WebPicLinkData[4].imgSrc}/>
      </div>
      <div className="icons">
        <img className="icon" alt="rails" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"/>
      </div>
      <div className="row route-row">
        <WebPicLink url={WebPicLinkData[0].url} imgSrc={WebPicLinkData[0].imgSrc}/>
        <WebPicLink url={WebPicLinkData[1].url} imgSrc={WebPicLinkData[1].imgSrc}/>
      </div>
      <div className="icons">
        <img className="icon" alt="wp" src="https://cdn3.iconfinder.com/data/icons/social-media-2034/500/wordpress-512.png"/>
      </div>
      <div className="row route-row">
        <WebPicLink url={WebPicLinkData[2].url} imgSrc={WebPicLinkData[2].imgSrc}/>
      </div>
    </div>
  </div>);
}

export default WebDevelopment;
