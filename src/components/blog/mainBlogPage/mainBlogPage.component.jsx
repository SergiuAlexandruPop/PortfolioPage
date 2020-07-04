import React from "react";

import ModifiedHeader from "../../modifiedHeader/modifiedHeader.component";

import { MainBlogPageContainer, PostsContainer } from "./mainBlogPage.styles";

const MainBlogPage = () => {
  return (
    <>
      <ModifiedHeader />
      <MainBlogPageContainer>
        <PostsContainer to="/first-post">
          {`<firstPost>Hello World!</firstPost>`}
        </PostsContainer>
        <PostsContainer to="/who-am-I">Who am I ?</PostsContainer>
      </MainBlogPageContainer>
    </>
  );
};

export default MainBlogPage;
