import React from "react";
import { Route, Switch } from "react-router-dom";

//import Header from "./components/header/header.component";
import HomePage from "./components/homePage/home.component";
import AboutMe from "./components/aboutMe/aboutMe.component";

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
    </div>
  );
}

export default App;
