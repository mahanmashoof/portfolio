import React from 'react';
import {Link} from 'react-router-dom';
import './HomePicLink.css';

function HomePicLink(props) {
  return (<div className="col-6 col-md-2 img1">
    <Link to={props.destination}><img className="img-link" alt="" src={props.picSource}/>
      <div className="overlay">
        <div className="overlay-text">
          <p>{props.imgText}</p>
        </div>
      </div>
    </Link>
  </div>);
}

export default HomePicLink;
