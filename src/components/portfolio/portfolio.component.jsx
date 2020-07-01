import React from "react";

import ClothingGif from "../../assets/gifs/ClothingGif.gif";

import ModifiedHeader from "../modifiedHeader/modifiedHeader.component";
import {
  PortfolioContainer,
  ProjectClothingContainer,
  ProjectImage,
  ProjectDetailsContainer,
} from "./portfolio.styles";

const Portfolio = () => {
  return (
    <div>
      <ModifiedHeader />
      <PortfolioContainer>
        <ProjectClothingContainer>
          <ProjectImage src={ClothingGif} alt="Clothing Project GIF" />
          <ProjectDetailsContainer>
            <p>Clothing App</p>
            <p>FRONT-END PROJECT</p>
          </ProjectDetailsContainer>
        </ProjectClothingContainer>
      </PortfolioContainer>
    </div>
  );
};

export default Portfolio;
