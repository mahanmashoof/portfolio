import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faWhatsappSquare} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";

const year = new Date().getFullYear();
let yearSpan;

if(year > 2020) {
  yearSpan = "2020 - " + year;
} else {
  yearSpan = year;
}

function Footer() {
  return (<div className="footer">
    <div>
      <a href="https://www.linkedin.com/in/mahan-mashoof-974a3039/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/></a>
      <a href="https://github.com/mahanmashoof" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x"/></a>
      <a href="https://api.whatsapp.com/send?phone=+46735956610"><FontAwesomeIcon className="icon" icon={faWhatsappSquare} size="2x"/></a>
      <a href="mailto: mahan.mashoof@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} size="2x"/></a>
      <a href="tel:+46766920960"><FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/></a>
    </div>
    <p className="foot-text">Mahan Mashoof © {yearSpan}</p>
  </div>);
}

export default Footer;
