import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResumeContainer = styled.img`
  width: 80%;
  margin: 3rem auto 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 95%;
  }
`
export const DownloadLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 8rem auto 0 auto;
  font-size: 1.65rem;
  width: 20rem;
  height: 4.5rem;
  cursor: pointer;
  background: linear-gradient(to bottom, #7e72c052 7%, #7e72c0d3 75%, #7e72c0);
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-self: center;
  font-family: "Open Sans Condensed";
  justify-content: center;
  opacity: 0.8;
  border: none;
  color: white;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 500px) {
    width: 15rem;
  }
`