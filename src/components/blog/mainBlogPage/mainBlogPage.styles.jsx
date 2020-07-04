import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainBlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20rem 0 0 0;
`;

export const PostsContainer = styled(Link)`
  font-size: 2.5rem;
  margin: 3rem;
  font-weight: 500;
  align-self: center;

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

// @media screen and (max-width: 1200px) {
//     width: 65%;
//     height: 5rem;
//     padding: 1rem;
//     margin-bottom: 1rem;
//   }

//   @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
//     width: 75%;
//     height: 7rem;
//     padding: 1rem;
//     margin-bottom: 1rem;
//     font-size: 3rem;
//   }

//   @media screen and (max-width: 900px) {
//     width: 70%;
//     height: 6rem;
//     padding: 1rem;
//     margin-bottom: 1rem;
//   }

//   @media screen and (max-width: 800px) {
//     width: 80%;
//     height: 6rem;
//     padding: 1rem;
//     margin-bottom: 2rem;
//   }

//   @media screen and (max-width: 425px) {
//     width: 95%;
//     font-size: 1.5rem;
//   }

//   @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
//     width: 95%;
//     font-size: 1.5rem;
//   }

//   @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
//     width: 95%;
//     font-size: 1.5rem;
//   }

//   @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
//     width: 95%;
//     font-size: 1.5rem;
//   }

//   @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
//     width: 95%;
//     font-size: 1.5rem;
//   }

//   @media screen and (max-width: 320px) {
//     width: 95%;
//     font-size: 1.2rem;
//   }
