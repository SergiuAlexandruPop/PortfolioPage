import React, { useState } from "react";

import ModifiedHeader from "../modifiedHeader/modifiedHeader.component";
import Profilepic from "../../assets/images/Profilepic.jpg";
import turtle from "../../assets/images/turtle.jpg";

import COURSES_DATA from "./courses.data.js";

import {
  AboutParagraphContainer,
  AboutMeContainer,
  ProfilePictureContainer,
  AboutMeBodyContainer,
  ParagraphPictureContainer,
  CourseLinkContainer,
  CoursesCollectionContainer,
} from "./aboutMe.styles";

const AboutMe = () => {
  const [coursesData] = useState(COURSES_DATA);
  return (
    <>
      <ModifiedHeader />
      <AboutMeBodyContainer>
        <ProfilePictureContainer src={Profilepic} alt="Selfie" />
        <AboutMeContainer>
          <AboutParagraphContainer>
            <span style={{ fontWeight: "bold", color: "#7e72c0" }}>
              Just your usual story.
            </span>
            <br />
            A guy found out he doesn't like what he's doing, gave up on the
            medical career and started learning code when he had 0 knowledge.
            Spamed out the old IT friends from highschool for advices and then
            took a deep dive on Udemy (9 courses) . Then I took the turtle's
            plan from "The Rabbit and the turtle" story and here we are.
            <ParagraphPictureContainer
              src={turtle}
              alt="The Rabbit and the Turtle picture"
            />
          </AboutParagraphContainer>

          {/*<AboutParagraphContainer>*/}
          {/*  <span style={{ fontWeight: "bold", color: "#7e72c0" }}>*/}
          {/*    As for knowledge,*/}
          {/*  </span>*/}
          {/*  <br />I started with a lot of CSS (this page doesn't really help me,*/}
          {/*  but it's just a prototype), went into Javascript, turned over every*/}
          {/*  rock there, and then React.js(with Redux) where I fell in love with*/}
          {/*  hooks. Too bad they can't replace Redux entirely.*/}
          {/*  <ParagraphPictureContainer*/}
          {/*    src={ReduxHooks}*/}
          {/*    alt="Redux and Hooks picture"*/}
          {/*  />*/}
          {/*</AboutParagraphContainer>*/}
          <AboutParagraphContainer>
            <span style={{ fontWeight: "bold", color: "#7e72c0" }}>
              Here is a list with links of all the courses that I took from last
              to first:
            </span>

            <br />
            {coursesData.map(({ name, url, id }) => (
              <CoursesCollectionContainer key={id}>
                <CourseLinkContainer to={{ pathname: url }} target="_blank">
                  {name}
                </CourseLinkContainer>
              </CoursesCollectionContainer>
            ))}
          </AboutParagraphContainer>
        </AboutMeContainer>
      </AboutMeBodyContainer>
    </>
  );
};

export default AboutMe;
