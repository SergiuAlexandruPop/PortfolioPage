import React from "react";

import rocket from "../../assets/gifs/rocket.gif";

import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  HomeOptionLink,
} from "./modifiedHeader.styles";

const ModifiedHeader = () => {
  return (
    <HeaderContainer>
      <HomeOptionLink to="/home">
        <img src={rocket} alt="RochetGif" style={{ width: "7rem" }} />
      </HomeOptionLink>

      <OptionsContainer>
        <OptionLink to="/aboutme">About Me</OptionLink>
        <OptionLink to="/blog">Blog</OptionLink>
        <OptionLink to="/resume">Résumé</OptionLink>
        <OptionLink to="/portofolio">Portofolio</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default ModifiedHeader;
