import styled from "styled-components";
import {Link} from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PeriodicTableContainer = styled.img`
  background-color: black;
  width: 65%;
  align-self: center;

  @media screen and (max-width: 600px) {
    width: 100%;
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
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
    Times, serif;
  }
`;

export const ImportantSideNote = styled.h3`
  color: #ed1749;
`;

export const ListContainer = styled.li`
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0.6rem;
  line-height: 1.6;
  color: #3a3f3f;
  letter-spacing: 0.4px;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
  Times, serif;
`;

export const VideoContainer = styled.iframe`
  width: 60%;
  aspect-ratio: 16 / 9;
  align-self: center;
`

export const ResourceTitle = styled(Link)`
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.6;
  color: #6558ad;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
  Times, serif;
`

export const GeneralLink = styled(Link)`
  font-size: 1.7rem;
  line-height: 1.6;
  color: #6558ad;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
  Times, serif;
`;
