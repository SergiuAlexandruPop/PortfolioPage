import React from "react";
import { Link } from "react-router-dom";
import ModifiedHeader from "../../../modifiedHeader/modifiedHeader.component";

import JobSearchingDog from "../../../../assets/images/JobSearchingDog.jpeg";
import PharmacyToIT from "../../../../assets/images/PharmacyToIT.png";

import { PostContainer } from "../generalStyles.styles";
import {
  BodyContainer,
  ParagraphContainer,
  DogPhotoContainer,
  PeriodicTableContainer,
  GeneralLink,
} from "./FirstPost.styles";

const FirstPost = () => {
  return (
    <>
      <ModifiedHeader />
      <BodyContainer>
        <PostContainer>
          <ParagraphContainer>
            <PeriodicTableContainer src={PharmacyToIT} alt="PeriodicTable" />
            <p>04.07.2020</p>
            <p>
              If you didn't click alt+f4 + blockURL after reading the bad joke
              which I call the title you are patient enough to hear my story.
            </p>

            <h3>Short version: </h3>
            <p>
              -I went to highschool feeling hyped to learn to code but for
              various reasons(wrong teacher) didn't.
            </p>
            <p>
              -Loved chemistry so went that way for 5 years and finished
              Pharmacy in Cluj-Napoca. In this time the profession jumped from a
              respectable one to not so much anymore.
            </p>
            <p>
              -Decided(with modesty) that I can learn how to code on my own from
              scratch.
            </p>
            <p>
              -Didn't have $2000 for a bootcamp -`{">"}` found Udemy & online
              resources.
            </p>
            <p>
              -Went from the absolute bottom and turned every rock on each
              subject up to React.js-Redux.
            </p>
            <p>
              -Fast forward 8 months, here I am looking for a job.(yes, I
              procrastinated like everybody here and there).
            </p>
            <DogPhotoContainer src={JobSearchingDog} alt="JobSearchingDog" />
            <h3>Long version</h3>
            <p> Well that's another post.</p>
          </ParagraphContainer>
        </PostContainer>
      </BodyContainer>
    </>
  );
};

export default FirstPost;
