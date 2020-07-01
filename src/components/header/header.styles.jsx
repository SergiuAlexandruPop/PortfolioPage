import styled from "styled-components";
import { Link } from "react-router-dom";

// background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);

export const OptionsContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  align-content: center;
  align-content: center;
  align-self: center;
  height: 3.5rem;
  width: 40%;
  display: flex;
  cursor: pointer;
  font-size: 2rem;

  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);

  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 95%;
    font-size: 1.5rem;
  }
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #ffffff;
  justify-self: stretch;
  align-self: center;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
