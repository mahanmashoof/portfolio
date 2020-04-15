import React from 'react';
import {Link} from 'react-router-dom';
import './HomePicLink.css';

function HomePicLink() {
  return (<div className="row">
    <div className="col-4 col-md-2 img1">
      <Link to="/webdev"><img className="img-link" alt="" src="https://i.ibb.co/V0yxvNb/VVV.jpg"/>
      <div className="overlay">
        <div className="overlay-text"><p>Web Development</p></div>
      </div>
      </Link>
    </div>
    <div className="col-4 col-md-2 img1">
      <Link to="/mecheng"><img className="img-link" alt="" src="https://i.ibb.co/qDdfnnn/cad4.png"/>
      <div className="overlay">
        <div className="overlay-text"><p>3D Design & Product Development</p></div>
      </div>
      </Link>
    </div>
    <div className="col-4 col-md-2 img1">
      <Link to="/mecheng"><img className="img-link" alt="" src="https://i.ibb.co/b339qfY/drw2.png"/>
      <div className="overlay">
        <div className="overlay-text"><p>2D Production Drawings</p></div>
      </div>
    </Link>
  </div>
    <div className="col-4 col-md-2 img1">
      <Link to="/mecheng"><img className="img-link" alt="" src="https://i.ibb.co/BLyMnWv/fem1.jpg"/>
      <div className="overlay">
        <div className="overlay-text"><p>FEM Strength Calculations</p></div>
      </div>
      </Link>
    </div>
    <div className="col-4 col-md-2 img1">
      <Link to="/mecheng"><img className="img-link" alt="" src="https://i.ibb.co/jThFk7T/pm2.png"/>
      <div className="overlay">
        <div className="overlay-text"><p>Project Management</p></div>
      </div>
      </Link>
    </div>
    <div className="col-4 col-md-2 img1">
      <Link to="/projects"><img className="img-link" alt="" src="https://i.ibb.co/bvYcNqk/proj1.jpg"/>
      <div className="overlay">
        <div className="overlay-text"><p>Carpentry & other Projects</p></div>
      </div>
      </Link>
    </div>
  </div>);
}

export default HomePicLink;
