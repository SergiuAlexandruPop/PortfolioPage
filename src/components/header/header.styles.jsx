import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  background-color: #5c5297;
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }
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
  color: #ffffff;
`;
