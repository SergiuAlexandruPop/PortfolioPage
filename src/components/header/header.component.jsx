import React from "react";

import { OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  return (
    <OptionsContainer>
      <OptionLink to="/aboutme">AboutMe</OptionLink>
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
  );
};

export default Header;
