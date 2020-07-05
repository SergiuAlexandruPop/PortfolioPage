import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/errorBoundary/error-boundary.component";

const HomePage = lazy(() => import("./components/homePage/home.component"));
const AboutMe = lazy(() => import("./components/aboutme/aboutMe.component"));
const Portfolio = lazy(() =>
  import("./components/portfolio/portfolio.component")
);
const MainBlogPage = lazy(() =>
  import("./components/blog/mainBlogPage/mainBlogPage.component")
);
const FirstPost = lazy(() =>
  import("./components/blog/blogPosts/FirstPost/FirstPost.component")
);
const WhoAmI = lazy(() =>
  import("./components/blog/blogPosts/WhoAmI/WhoAmI.component")
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={MainBlogPage} />
            <Route exact path="/First-Post" component={FirstPost} />
            <Route exact path="/Who-am-I" component={WhoAmI} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
}

export default App;
