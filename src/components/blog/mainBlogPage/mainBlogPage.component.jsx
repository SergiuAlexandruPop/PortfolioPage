import React from "react";

import ModifiedHeader from "../../modifiedHeader/modifiedHeader.component";

import {
  MainBlogPageContainer,
  PostsContainer,
  DateContainer,
  PostAndDateContainer,
} from "./mainBlogPage.styles";

const MainBlogPage = () => {
  return (
    <>
      <ModifiedHeader />
      <MainBlogPageContainer>
        <PostAndDateContainer>
          <PostsContainer to="/first-post">Hello World!</PostsContainer>
          <DateContainer>04.07.2020</DateContainer>
        </PostAndDateContainer>

        <PostAndDateContainer>
          <PostsContainer to="/who-am-I">Who am I ?</PostsContainer>
          <DateContainer>04.07.2020</DateContainer>
        </PostAndDateContainer>
      </MainBlogPageContainer>
    </>
  );
};

export default MainBlogPage;
