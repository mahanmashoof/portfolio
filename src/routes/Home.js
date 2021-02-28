import React from "react";
import "./../App.css";
import HomeSlideshow from "./../components/HomeSlideshow.js";
import Resume from "./../components/Resume.js";
import WebPicLinkData from "./../data/WebPicLinkData.jsx";
import WebPicLinks from "./../components/webdev/WebPicLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faHtml5, faCss3, faWordpress, faAws, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const dayNum = new Date().getDay();
  let hours = new Date().getHours();
  let timePhrase;
  let byePhrase;

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayList[dayNum];

  if (hours > 18) {
    timePhrase = "Hello, and ";
    byePhrase = "have a great " + day + " night 🌒";
  } else if (hours > 12) {
    timePhrase = "Good afternoon, and ";
    byePhrase = "have a great " + day + " evening ";
  } else if (hours > 10) {
    timePhrase = "How are you doing this " + day + "? ";
    byePhrase = "lunch-hour anytime now 🙌";
  } else if (hours > 4) {
    timePhrase = "Good morning, and ";
    byePhrase = "have a great " + day;
  } else {
    timePhrase = "It's late at night 😴 ";
    byePhrase = "it's " + day + " already btw 😬";
  }

  return (
    <div className="full-page-home">
      <div className="container">
        <div className="home-opening">
          <div className="center-text">
            <h3 className="home-heading">
              {timePhrase}
              welcome to my page!
            </h3>
            <p>
              My name is Mahan, a Web developer with background in Mechanical
              engineering.
            </p>
            <p>
              Feel free to navigate this page to see my work and hopefully know
              me better.
            </p>
            <p>
              If there's any thing I can help you with, don't hesitate to{" "}
              <a href="#resume" className="exception-link">
                contact me
              </a>{" "}
              with your questions!
            </p>
            <p className="bye-phrase">- {byePhrase}-</p>
          </div>
          <div className="center-image">
            <img className="image" src="mahan4.jpg" alt="" />
          </div>
        </div>

        <div className="stack-div">
          <FontAwesomeIcon style={{ color: 'black' }} icon={faJsSquare} size="2x" />
          <img alt='' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/rubyonrails.svg' style={{height: '2rem'}}/>
          <img alt='' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/jquery.svg' style={{height: '2rem'}}/>
          <FontAwesomeIcon style={{ color: 'black' }} icon={faReact} size="2x" />
          <FontAwesomeIcon style={{ color: 'black' }} icon={faWordpress} size="2x" />
          <img alt='' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/next-dot-js.svg' style={{height: '2rem'}}/>
          <img alt='' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/postgresql.svg' style={{height: '2rem'}}/>
          <FontAwesomeIcon style={{ color: 'black' }} icon={faGitAlt} size="2x" />
        </div>
        <div className="row">
          <WebPicLinks
            url={WebPicLinkData[6].url}
            imgSrc={WebPicLinkData[6].imgSrc}
            descr={WebPicLinkData[6].descr}
            tech={WebPicLinkData[6].tech}
          />
          <WebPicLinks
            url={WebPicLinkData[5].url}
            imgSrc={WebPicLinkData[5].imgSrc}
            descr={WebPicLinkData[5].descr}
            tech={WebPicLinkData[5].tech}
          />
          <WebPicLinks
            url={WebPicLinkData[3].url}
            imgSrc={WebPicLinkData[3].imgSrc}
            descr={WebPicLinkData[3].descr}
            tech={WebPicLinkData[3].tech}
          />
          <WebPicLinks
            url={WebPicLinkData[2].url}
            imgSrc={WebPicLinkData[2].imgSrc}
            descr={WebPicLinkData[2].descr}
            tech={WebPicLinkData[2].tech}
          />
          <WebPicLinks
            url={WebPicLinkData[1].url}
            imgSrc={WebPicLinkData[1].imgSrc}
            descr={WebPicLinkData[1].descr}
            tech={WebPicLinkData[1].tech}
          />
          <WebPicLinks
            url={WebPicLinkData[0].url}
            imgSrc={WebPicLinkData[0].imgSrc}
            descr={WebPicLinkData[0].descr}
            tech={WebPicLinkData[0].tech}
          />
        </div>
        <div className="stack-div" style={{ marginTop: '0.5rem', borderRadius: '0 0 1rem 1rem', height: '2rem' }}></div>
        <HomeSlideshow />
        <Resume />
      </div>
    </div>
  );
}

export default Home;
