import React from "react";

import { OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  return (
    <OptionsContainer>
      <OptionLink to="/aboutme">AboutMe</OptionLink>
      <OptionLink to="/blog">Blog</OptionLink>
      {/*<OptionLink*/}
      {/*  to={{*/}
      {/*    pathname:*/}
      {/*      "https://drive.google.com/file/d/1TlJplKqZ0GFAavBHtbENG6Xz4ZFSroTE/view?usp=sharing",*/}
      {/*  }}*/}
      {/*  target="_blank"*/}
      {/*>*/}
      {/*  Résumé*/}
      {/*</OptionLink>*/}
      <OptionLink to="/resume">Résumé</OptionLink>

      <OptionLink to="/portfolio">Portofolio</OptionLink>
    </OptionsContainer>
  );
};

export default Header;
