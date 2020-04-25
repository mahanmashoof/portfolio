import React from 'react';
import './MechEngCard.css';
import {Link} from 'react-router-dom';

function MechEngCard(props) {

  return (<div className="col-12 col-md-6">
    <Link to={props.dest}><img className="mecheng__img" alt="" src={props.imgSrc}/></Link>
  </div>);
}

export default MechEngCard;
