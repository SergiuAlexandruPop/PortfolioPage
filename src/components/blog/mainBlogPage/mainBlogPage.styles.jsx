import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainBlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem 0 0 0;
`;

export const PostAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateContainer = styled.p`
  margin: 3rem;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }
`;

export const PostsContainer = styled(Link)`
  font-size: 2.5rem;
  margin: 3rem;
  font-weight: 500;
  align-self: start;

  :hover {
    color: #6558ad;
  }

  @media screen and (max-width: 1200px) {
    font-size: 3rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    font-weight: 500;
    margin: 4rem 0 0 0;
  }
`;
