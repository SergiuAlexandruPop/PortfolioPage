import React from "react";

import { OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  return (
    <OptionsContainer>
      <OptionLink to="/aboutme">AboutMe</OptionLink>
      <OptionLink to="/blog">Blog</OptionLink>
      <OptionLink
        to={{
          pathname:
            "https://drive.google.com/file/d/12m8FtN_igh1Pidh8e9fxMQbh3N66RTOV/view",
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
