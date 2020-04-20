import React from 'react';
import './WebDevelopment.css';
import WebPicLink from './../components/webdev/WebPicLink.js';
import WebPicLinkData from './../data/WebPicLinkData.jsx';

function WebDevelopment() {
  return (<div className="full-page">
    <div className="container">
      <h1 className="heading">Web Applications developed at Le wagon
        <a href="https://www.lewagon.com/" target="_blank" rel="noopener noreferrer"><img alt="" src="https://pbs.twimg.com/profile_images/707978249138262016/aroNL4k3_400x400.jpg"/></a>
      </h1>
      <div className="icons">
        <img className="icon" alt="rails" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"/>
        <img className="icon" alt="html" src="https://icons-for-free.com/iconfiles/png/512/coding+html+programming+web+icon-1320184881567336963.png"/>
        <img className="icon" alt="css" src="https://image.flaticon.com/icons/png/512/202/202318.png"/>
        <img className="icon" alt="javascript" src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13691885491579517854-256.png"/>
      </div>
      <div className="row">
        <WebPicLink url={WebPicLinkData[0].url} imgSrc={WebPicLinkData[0].imgSrc}/>
        <WebPicLink url={WebPicLinkData[1].url} imgSrc={WebPicLinkData[1].imgSrc}/>
      </div>
    </div>
  </div>);
}

export default WebDevelopment;
