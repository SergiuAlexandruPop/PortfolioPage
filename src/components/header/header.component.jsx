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
            "https://drive.google.com/file/d/18CoX7SFtWv9JoZQoLlHm21tqML8Ndmgv/view?usp=sharing",
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
