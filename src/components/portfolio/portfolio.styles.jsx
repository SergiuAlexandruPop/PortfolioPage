import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    margin-top: 10rem;
  }
`;

export const ProjectClothingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 55rem;
  margin: 5%;
  border: 1px solid black;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    margin: 0;
  }
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
    font-weight: 400;

    @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 1.65rem;
    }
  
    @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
      font-size: 1.65rem;
    }

    @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
      font-size: 1.65rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    margin: 0.2rem;
    margin-left: 40%;
    font-weight: 700;

    @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 1.65rem;
    }
  
    @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
      font-size: 1.65rem;
    }

    @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
      font-size: 1.65rem;
    }
  }

 

  }
`;

export const ParagraphContainer = styled.p`
  line-height: 1.6;
  font-size: 1.8rem;
  font-weight: 100;
  font-family: monospace, "Lucida Console", Courier;

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    font-size: 1.65rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 1.65rem;
  }
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
