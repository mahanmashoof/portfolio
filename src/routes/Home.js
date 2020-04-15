import React from 'react';
import './../App.css';
import HomeSlideshow from './../components/HomeSlideshow.js';
import Resume from './../components/Resume.js';
import HomePicLink from './../components/HomePicLink.js';

function Home() {

  const dayNum = new Date().getDay();
  let hours = new Date().getHours();
  let timePhrase;
  let byePhrase;

  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = dayList[dayNum];

  if (hours > 18) {
    timePhrase = "Hello, and ";
    byePhrase = "have a great " + day + " night 🌒"
  } else if (hours > 13) {
    timePhrase = "Good afternoon, and ";
    byePhrase = "have a great " + day + " evening "
  } else if (hours > 10) {
    timePhrase = "How are you doing this " + day + "? ";
    byePhrase = "lunch-hour anytime now 🙌"
  } else if (hours > 4) {
    timePhrase = "Good morning, and ";
    byePhrase = "have a great " + day
  } else {
    timePhrase = "It's late at night 😴 ";
    byePhrase = "it's " + day + " already btw 😬"
  }

  return (<div className="full-page-home">
    <div className="container">
      <div className="home-opening">
        <div className="center-text">
          <h3 className="home-heading">{timePhrase}
            welcome to my page!</h3>
          <p>My name is Mahan, a Mechanical engineer and Web developer living in Rio de Janeiro, Brazil.</p>
          <p>Feel free to navigate this page to see my work and hopefully know me better.</p>
          <p>If there's any thing I can help you with, don't hesitate to contact me with your questions!</p>
          <p className="bye-phrase">- {byePhrase}
            -</p>
        </div>
        <div className="center-image">
          <img className="image" src="https://i.ibb.co/16r4BBb/IMG-20181017-WA0116.jpg" alt=""/>
        </div>
      </div>
      {/* <hr className="home-hr"/> */}
      <HomePicLink />
      <HomeSlideshow/>
      <Resume />
    </div>
  </div>);
}

export default Home;
