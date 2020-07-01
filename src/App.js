import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/homePage/home.component";
import AboutMe from "./components/aboutMe/aboutMe.component";
import Portfolio from "./components/portfolio/portfolio.component";

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </>
  );
}

export default App;
