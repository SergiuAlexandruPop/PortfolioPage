import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutMeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const AboutMeContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 70%;
`;

export const ParagraphPictureContainer = styled.img`
  margin-top: 1rem;
  width: 22rem;
  align-self: center;
  border-radius: 2rem;
`;

export const ProfilePictureContainer = styled.img`
  width: 20rem;
  border-radius: 12.5rem;
  justify-self: center;
  align-self: center;
  margin-right: 5%;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
`;

export const AboutParagraphContainer = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1.5rem;
  padding: 2rem;
  border-bottom: 0.5px solid #ebebeb;
`;

export const CourseLinkContainer = styled(Link)`
  font-weight: 400;
  font-size: 1.5rem;
`;
