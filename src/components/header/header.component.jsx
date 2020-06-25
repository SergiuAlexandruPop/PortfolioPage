import React from "react";

import { HeaderContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <OptionLink to="/home">Home</OptionLink>
      </div>
      <OptionsContainer>
        <OptionLink to="/aboutme">About Me</OptionLink>
        <OptionLink to="/blog">Blog</OptionLink>
        <OptionLink to="/resume">Résumé</OptionLink>
        <OptionLink to="/portofolio">Portofolio</OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
