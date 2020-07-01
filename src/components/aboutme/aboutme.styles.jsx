import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutMeBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const ProfilePictureContainer = styled.img`
  width: 20rem;
  border-radius: 12.5rem;
  justify-self: center;
  align-self: center;
  margin-right: 5%;
  margin-bottom: 3rem;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-top: 12%;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 70%;

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 95%;
  }
`;

export const AboutParagraphContainer = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1.5rem;
  padding: 2rem;
  border-bottom: 0.5px solid #ebebeb;

  &:last-child {
    border: none;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    border-bottom: 0.5px solid #d4d3d3;
  }
`;

export const ParagraphPictureContainer = styled.img`
  margin-top: 0.5rem;
  width: 22rem;
  align-self: center;
  border-radius: 2rem;
`;

export const CoursesCollectionContainer = styled.li`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CourseLinkContainer = styled(Link)`
  font-weight: 400;
  font-size: 1.5rem;
`;
