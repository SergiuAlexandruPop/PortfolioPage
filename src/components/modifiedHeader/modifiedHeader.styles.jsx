import styled from "styled-components";
import { Link } from "react-router-dom";
import { RocketContainer } from "../homePage/home.styles";

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  background-color: white;

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
`;

export const RocketModifiedHeaderContainer = styled.img`
  ${RocketContainer}
  width: 7rem;
  height: auto;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: black;
`;

export const HomeOptionLink = styled(Link)`
  cursor: pointer;
  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-self: center;
`;
