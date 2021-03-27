import React from "react";
import Button from "react-bootstrap/Button";

function Intro() {
  function StartPage() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("homepage").style.animation = "fadeIn 5s";
  }

  let hours = new Date().getHours();
  let timePhrase;

  if (hours >= 20) {
    timePhrase = "HAVING A GOOD NIGHT?";
  } else if (hours > 18) {
    timePhrase = "GOOD EVENING";
  } else if (hours > 12) {
    timePhrase = "GOOD AFTERNOON";
  } else if (hours > 10) {
    timePhrase = "HELLO";
  } else if (hours > 4) {
    timePhrase = "GOOD MORNING";
  } else {
    timePhrase = "CAN'T SLEEP?";
  }

  return (
    <div className="intro" id="intro">
      <h2>{timePhrase}</h2>
      <img src="startpage.gif" alt="" className="startpage-img" />
      <br />
      <Button
        style={{ marginTop: "3rem" }}
        variant="outline-light"
        onClick={StartPage}
      >
        Enter Here ❯❯
      </Button>
    </div>
  );
}

export default Intro;
