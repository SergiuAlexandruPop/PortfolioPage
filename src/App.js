import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/homePage/home.component";
import AboutMe from "./components/aboutme/aboutMe.component";
import Portfolio from "./components/portfolio/portfolio.component";
import MainBlogPage from "./components/blog/mainBlogPage/mainBlogPage.component";
import FirstPost from "./components/blog/blogPosts/FirstPost/FirstPost.component";
import WhoAmI from "./components/blog/blogPosts/WhoAmI/WhoAmI.component";

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={MainBlogPage} />
        <Route exact path="/First-Post" component={FirstPost} />
        <Route exact path="/Who-am-I" component={WhoAmI} />
      </Switch>
    </>
  );
}

export default App;
