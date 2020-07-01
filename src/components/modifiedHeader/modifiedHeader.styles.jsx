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

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 90%;
  }
`;

export const RocketModifiedHeaderContainer = styled.img`
  ${RocketContainer}
  width: 7rem;
  height: auto;

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 5rem;
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
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: black;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0.85rem;
  }
`;

export const HomeOptionLink = styled(Link)`
  cursor: pointer;
  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-self: center;

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-right: 18%;
  }
`;
