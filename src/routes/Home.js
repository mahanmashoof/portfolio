import React from "react";
import "./../App.scss";
import Resume from "./../components/Resume.js";
import { WebPicLinkData } from "./../data/local_api";
import WebPicLinks from "./../components/webdev/WebPicLink.js";
import Carousel from "react-bootstrap/Carousel";
import TechCarousel from "../../src/components/techCarousel";

function Home() {
  const dayNum = new Date().getDay();
  let hours = new Date().getHours();
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
    byePhrase = "have a great " + day + " night 🌒";
  } else if (hours > 12) {
    byePhrase = "have a great " + day + " evening ";
  } else if (hours > 10) {
    byePhrase = "lunch-hour anytime now 🙌";
  } else if (hours > 4) {
    byePhrase = "have a great " + day;
  } else {
    byePhrase = "it's " + day + " already btw 😬";
  }

  return (
    <div id="homepage">
      <div className="full-page-home">
        <div className="container">
          <div className="home-opening">
            <div className="center-text">
              <h3 className="home-heading">Welcome to my page</h3>
              <p>
                My name is Mahan, a Web developer with background in Mechanical
                engineering.
              </p>
              <p>
                Feel free to navigate this page to see my work and hopefully
                know me better.
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
              <img className="image" src="mahan.jpg" alt="" />
            </div>
          </div>

          <h3 style={{ margin: '1rem 0' }}>Projects & Tech-stack</h3>
          <div className="stack-div">
            <div className="container">
              <TechCarousel />
            </div>
          </div>
          <Carousel fade={true} indicators={false} interval={2500}>
          <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[7].url}
                imgSrc={WebPicLinkData[7].imgSrc}
                descr={WebPicLinkData[7].descr}
                tech={WebPicLinkData[7].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[6].url}
                imgSrc={WebPicLinkData[6].imgSrc}
                descr={WebPicLinkData[6].descr}
                tech={WebPicLinkData[6].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[5].url}
                imgSrc={WebPicLinkData[5].imgSrc}
                descr={WebPicLinkData[5].descr}
                tech={WebPicLinkData[5].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[4].url}
                imgSrc={WebPicLinkData[4].imgSrc}
                descr={WebPicLinkData[4].descr}
                tech={WebPicLinkData[4].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[3].url}
                imgSrc={WebPicLinkData[3].imgSrc}
                descr={WebPicLinkData[3].descr}
                tech={WebPicLinkData[3].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[2].url}
                imgSrc={WebPicLinkData[2].imgSrc}
                descr={WebPicLinkData[2].descr}
                tech={WebPicLinkData[2].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[1].url}
                imgSrc={WebPicLinkData[1].imgSrc}
                descr={WebPicLinkData[1].descr}
                tech={WebPicLinkData[1].tech}
              />
            </Carousel.Item>
            <Carousel.Item>
              <WebPicLinks
                url={WebPicLinkData[0].url}
                imgSrc={WebPicLinkData[0].imgSrc}
                descr={WebPicLinkData[0].descr}
                tech={WebPicLinkData[0].tech}
              />
            </Carousel.Item>
          </Carousel>
          <div
            className="stack-div"
            style={{
              margin: "0.5rem 0 3rem",
              borderRadius: "0 0 1rem 1rem",
              height: "2rem",
            }}
          ></div>
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default Home;
