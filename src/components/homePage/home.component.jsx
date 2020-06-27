import React from "react";
import rocket from "../../assets/gifs/rocket.gif";
import { ReactComponent as Phone } from "../../assets/svgs/phone.svg";
import Header from "../header/header.component";

import {
  NameContainer,
  HomePageContainer,
  ProfessionName,
  OptionLink,
  FooterContainer,
  RocketContainer,
  PhoneNumberContainer,
  EmailContainer,
} from "./home.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <NameContainer>
        <span style={{ color: "#7e72c0" }}>Sergiu</span>
        <span style={{ color: "#FFA501" }}>Pop</span>
      </NameContainer>

      <ProfessionName>Software Developer</ProfessionName>
      <RocketContainer>
        <img src={rocket} alt="RochetGif" style={{ width: "30rem" }} />
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
        <Phone />
        <PhoneNumberContainer href="tel:0747016558">
          0747016558
        </PhoneNumberContainer>
        <EmailContainer href="mailto: sergiualexandrupop@gmail.com">
          sergiualexandrupop@gmail.com
        </EmailContainer>
      </FooterContainer>
    </HomePageContainer>
  );
};

export default HomePage;
