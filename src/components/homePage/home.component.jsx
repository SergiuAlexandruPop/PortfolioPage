import React from "react";
//import Profilepic from "../../assets/images/Profilepic.jpg";
import rocket from "../../assets/gifs/rocket.gif";

import {
  NameContainer,
  HomePageContainer,
  ProfessionName,
  OptionLink,
  FooterContainer,
  RocketContainer,
  //ProfilePictureContainer,
} from "./home.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      {/* <ProfilePictureContainer>
        <img src={Profilepic} alt="Selfie" style={{ width: "15.5rem" }} />
      </ProfilePictureContainer> */}
      <NameContainer>
        <span style={{ color: "#493E8B" }}>Sergiu-Alexandru</span>
        <span style={{ color: "#FFA501" }}>Pop</span>
      </NameContainer>
      <ProfessionName>Front-End Developer</ProfessionName>
      <RocketContainer>
        <img src={rocket} alt="Selfie" style={{ width: "30rem" }} />
      </RocketContainer>
      <FooterContainer>
        <OptionLink
          to={{ pathname: "https://www.linkedin.com/in/sergiualexandrupop/" }}
          target="_blank"
        >
          LinkedIn
        </OptionLink>
        <OptionLink
          to={{ pathname: "https://github.com/SergiuAlexandruPop" }}
          target="_blank"
        >
          GitHub
        </OptionLink>
      </FooterContainer>
    </HomePageContainer>
  );
};

export default HomePage;
