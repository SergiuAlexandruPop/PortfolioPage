import styled from "styled-components";
import { Link } from "react-router-dom";
import { RocketContainer } from "../homePage/home.styles";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  width: 100%;
  font-size: 1.5rem;
  background-color: white;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 90%;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    width: 90%;
  }

  @media screen and (max-width: 425px) {
    width: 90%;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    width: 90%;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    width: 90%;
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    width: 90%;
    font-size: 1.35rem;
  }

  @media screen and (max-width: 320px) {
    width: 93%;
    font-size: 1.35rem;
  }
`;

export const RocketModifiedHeaderContainer = styled.img`
  ${RocketContainer};
  width: 7rem;
  height: auto;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 10rem;
  }

  @media screen and (max-width: 425px) {
    width: 6rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 5rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    width: 5rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    width: 5rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    width: 4.5rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    width: 4.5rem;
  }

  @media screen and (max-width: 320px) {
    width: 4.2rem;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;
  height: 100%;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    width: 80%;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    width: 80%;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: black;
  white-space: nowrap;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 425px) {
    padding: 0.85rem;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0.85rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    padding: 0.85rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    padding: 0.85rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    padding: 0.8rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    padding: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    padding: 0.6rem;
  }
`;

export const HomeOptionLink = styled(Link)`
  cursor: pointer;
  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-self: center;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    border-radius: 5rem;
  }

  @media screen and (max-width: 425px) {
    margin-right: 10%;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-right: 18%;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    margin-right: 18%;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    margin-right: 18%;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    margin-right: 13%;
  }

  @media screen and (max-width: 375px) {
    margin-right: 18%;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    margin-right: 18%;
  }
`;
