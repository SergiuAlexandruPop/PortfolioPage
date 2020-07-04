import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const DogPhotoContainer = styled.img`
  align-self: center;
  width: 40%;
  height: auto;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const GeneralLink = styled(Link)`
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0.6rem;
  line-height: 1.6;
  color: #6558ad;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
    Times, serif;
`;
