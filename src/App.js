import React from "react";

import Header from "./components/header/header.component";
import HomePage from "./components/homePage/home.component";

import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
