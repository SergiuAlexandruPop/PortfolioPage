import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media screen and (max-width: 1200px) {
    width: 65%;
    height: 5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 75%;
    height: 7rem;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
    height: 6rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 425px) {
    width: 95%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 95%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    width: 95%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    width: 95%;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
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
