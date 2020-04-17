import React from 'react';
import './WebDevelopment.css';

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
        <img className="icon" alt="javascript" src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png"/>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <a href="http://venuevidivici.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="webdev-img" alt="" src="https://i.ibb.co/V0yxvNb/VVV.jpg"></img>
          </a>
        </div>
        <div className="col-12 col-md-6">
          <a href="http://www.usicz.com/" target="_blank" rel="noopener noreferrer">
            <img className="webdev-img" alt="" src="https://i.ibb.co/5cDg7RT/usicz.png"></img>
          </a>
        </div>
      </div>
    </div>
  </div>);
}

export default WebDevelopment;
