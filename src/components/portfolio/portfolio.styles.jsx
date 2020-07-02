import styled from "styled-components";
//import { Link } from "react-router-dom";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectClothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 55rem;
  margin: 5%;
  border: 1px solid black;
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  margin: 2.5%;
  
  
  

  h3 {
    font-size: 2rem;
    margin: 0.2rem;
    margin-left: 10%;
    font-weight: 500;
  }

  h2 {
    font-size: 1.75rem;
    margin: 0.2rem;
    margin-left: 40%;
    font-weight: 500;
  }

 

  }
`;

export const ParagraphContainer = styled.p`
  line-height: 1.6;
  font-size: 1.8rem;
  font-weight: 100;
  font-family: monospace, "Lucida Console", Courier;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonContainer = styled.button`
  margin: 0.5rem;
  font-size: 1.65rem;
  width: 8rem;
  height: 3.5rem;
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
`;
