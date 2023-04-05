import styled from "styled-components";
import {Link} from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 10rem auto;
  box-shadow: 0 0 60px -40px #aaa;
  border: 1px solid #fff;
  padding: .7rem 2rem 2rem;

  @media screen and (max-width: 1000px) {
    width: 95%;
    margin: 8rem auto;
    box-shadow: none;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  p {
    font-size: 1.7rem;
    font-weight: 300;
    margin: 0.6rem;
    line-height: 1.6;
    color: #3a3f3f;
    letter-spacing: 0.4px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ImportantSideNote = styled.div`
  margin: 1.5rem 0;
  line-height: 2.5rem;
  color: #d31541;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
`;

export const Divider = styled.hr`
  width: 100%;
`;

export const ListContainer = styled.li`
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0.6rem;
  line-height: 1.6;
  color: #3a3f3f;
  letter-spacing: 0.4px;
  font-family: 'Roboto', sans-serif;
`;

export const MainText = styled.p`
  margin-bottom: 1rem;
`;

export const VideoContainer = styled.iframe`
  width: 60%;
  aspect-ratio: 16 / 9;
  align-self: center;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const ResourceTitle = styled(Link)`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  font-family: 'Roboto', sans-serif;
  color: #577baa;
  :hover {
    color: #01ADEF;
  }
`

export const GeneralLink = styled(Link)`
  font-size: 1.7rem;
  line-height: 1.6;
  color: #6558ad;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  font-family: 'Roboto', sans-serif;
`;