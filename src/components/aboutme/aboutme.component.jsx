import React from "react";

import ModifiedHeader from "../modifiedHeader/modifiedHeader.component";
import Profilepic from "../../assets/images/Profilepic.jpg";

import { PictureContainer, AboutParagraphContainer } from "./aboutMe.styles";

const AboutMe = () => {
  return (
    <>
      <ModifiedHeader />

      <PictureContainer>
        <img
          src={Profilepic}
          alt="Selfie"
          style={{ width: "25rem", borderRadius: "12.5rem" }}
        />
      </PictureContainer>

      <AboutParagraphContainer>
        Just your usual story. A guy found out he doesn't like what he is doing,
        gave up on the medical career and started learning code when he had 0
        knowledge. Spamed out the old IT friends from highschool for advices and
        then took a deep dive on Udemy . Then I took the turtle's plan from "The
        Rabbit and the turtle" story and here we are.
      </AboutParagraphContainer>

      <AboutParagraphContainer>
        As for knowledge, I started with a lot of CSS(this page doesn't really
        help me, but it's just a prototype), went into Javascript, turned over
        every rock there, and then React.js(with Redux) where I feel in love
        with hooks. Too bad they can't replace Redux .
      </AboutParagraphContainer>
    </>
  );
};

export default AboutMe;
