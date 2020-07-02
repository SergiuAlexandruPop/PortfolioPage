import React from "react";

import ClothingGif from "../../assets/gifs/ClothingGif.gif";

import ModifiedHeader from "../modifiedHeader/modifiedHeader.component";
import {
  PortfolioContainer,
  ProjectClothingContainer,
  ProjectImage,
  ProjectDetailsContainer,
  ParagraphContainer,
  ButtonsContainer,
  ButtonContainer,
} from "./portfolio.styles";

const Portfolio = () => {
  function liveLinkClick() {
    window.open("https://sergiu-clothing-app.herokuapp.com/", "_blank");
  }

  function gitubLinkClick() {
    window.open(
      "https://github.com/SergiuAlexandruPop/crwn-clothing",
      "_blank"
    );
  }
  return (
    <>
      <ModifiedHeader />
      <PortfolioContainer>
        <ProjectClothingContainer>
          <ProjectImage src={ClothingGif} alt="Clothing Project GIF" />
          <ProjectDetailsContainer>
            <h3>Clothing Website</h3>
            <h2>FRONT-END PROJECT</h2>
            <ParagraphContainer>
              React.js | Redux | Context | Hooks | React-Lazy | Firebase |
              Stripe | CSS-in-JS | Redux-thunk(previosly) | Redux-saga(present)
            </ParagraphContainer>
          </ProjectDetailsContainer>
          <ButtonsContainer>
            <ButtonContainer onClick={liveLinkClick}>Live</ButtonContainer>
            <ButtonContainer onClick={gitubLinkClick}>Github</ButtonContainer>
          </ButtonsContainer>
        </ProjectClothingContainer>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
