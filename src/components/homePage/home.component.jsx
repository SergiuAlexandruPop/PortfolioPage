import React from "react";
import rocket from "../../assets/gifs/rocket.gif";
import { ReactComponent as Phone } from "../../assets/svgs/phone.svg";
import Header from "../header/header.component";

import {
  NameContainer,
  HomePageContainer,
  ProfessionName,
  FooterContainer,
  RocketHomeContainer,
  PhoneNumberContainer,
  EmailContainer,
  LinkedInLink,
  GitHubLink,
  PhoneLogoContainer,
  FirstNameContainer,
  LastNameContainer,
  FacebookLink,
  InstagramLink,
} from "./home.styles";

function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <NameContainer>
        <FirstNameContainer>Sergiu</FirstNameContainer>
        <LastNameContainer>Pop</LastNameContainer>
      </NameContainer>

      <ProfessionName>Software Developer</ProfessionName>
      <RocketHomeContainer src={rocket} alt="RochetGif" />
      <FooterContainer>
        <LinkedInLink
          to={{ pathname: "https://www.linkedin.com/in/sergiualexandrupop/" }}
          target="_blank"
        >
          LinkedIn
        </LinkedInLink>
        <GitHubLink
          to={{ pathname: "https://github.com/SergiuAlexandruPop" }}
          target="_blank"
        >
          GitHub
        </GitHubLink>
        <PhoneLogoContainer>
          <Phone />
        </PhoneLogoContainer>

        <PhoneNumberContainer href="tel:0747016558">
          0747016558
        </PhoneNumberContainer>
        <EmailContainer href="mailto: sergiualexandrupop@gmail.com">
          sergiualexandrupop@gmail.com
        </EmailContainer>
        <FacebookLink
          to={{ pathname: "https://www.facebook.com/PopSergiuu" }}
          target="_blank"
        >
          Facebook
        </FacebookLink>
        <InstagramLink
          to={{ pathname: "https://www.instagram.com/popsergiuu/" }}
          target="_blank"
        >
          Instagram
        </InstagramLink>
      </FooterContainer>
    </HomePageContainer>
  );
}

export default HomePage;
