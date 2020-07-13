import React from "react";

import rocket from "../../assets/gifs/rocket.gif";

import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  HomeOptionLink,
  RocketModifiedHeaderContainer,
} from "./modifiedHeader.styles";

const ModifiedHeader = () => {
  return (
    <HeaderContainer>
      <HomeOptionLink to="/">
        <RocketModifiedHeaderContainer src={rocket} alt="RochetGif" />
      </HomeOptionLink>

      <OptionsContainer>
        <OptionLink to="/aboutme">
          <span>AboutMe</span>
        </OptionLink>
        <OptionLink to="/blog">Blog</OptionLink>
        <OptionLink
          to={{
            pathname: "https://drive.google.com/drive/u/1/my-drive",
          }}
          target="_blank"
        >
          Résumé
        </OptionLink>
        <OptionLink to="/portfolio">Portofolio</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default ModifiedHeader;
