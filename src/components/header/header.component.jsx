import React from "react";

import { OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  return (
    <OptionsContainer>
      <OptionLink to="/aboutme">About me</OptionLink>
      <OptionLink to="/blog">Blog</OptionLink>
      <OptionLink to="/resume">Résumé</OptionLink>

      <OptionLink to="/portfolio">Portofolio</OptionLink>
    </OptionsContainer>
  );
};

export default Header;
