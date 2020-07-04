import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TransitionEffectStyles = css`
  transition: all 0.05s;

  &:hover {
    transform: scale(1.02) translateY(0.1rem);
  }
`;

const LinksContainerStyles = css`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #493e8b;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    padding: 0;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    padding: 0;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    padding: 0;
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  opacity: 0.9;
  margin-top: 4rem;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    margin-top: 10rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-top: 10rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    margin-top: 10rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    margin-top: 10rem;
  }
`;

export const FirstNameContainer = styled.h1`
  color: #7e72c0;
  font-size: 3.5rem;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 6rem;
  }
`;

export const LastNameContainer = styled.h1`
  color: #ffa501;
  font-size: 3.5rem;

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 6rem;
  }
`;

export const ProfessionName = styled.h1`
  color: #6558ad;
  font-size: 3rem;
  opacity: 0.9;
  margin: 0 1rem;

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin: 0;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    margin: 0;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    margin: 0;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    margin: 0;
  }
`;

export const LinkedInLink = styled(Link)`
  ${LinksContainerStyles}
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: end;

  transition: all 0.05s;

  ${TransitionEffectStyles}

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-right: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    margin-right: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    margin-right: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    margin-right: 1rem;
    margin-top: 1rem;
  }
`;

export const GitHubLink = styled(Link)`
  ${LinksContainerStyles}
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: start;

  ${TransitionEffectStyles}

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const PhoneNumberContainer = styled.a`
  ${LinksContainerStyles}
  padding : 1rem 0;
  margin-right: 3rem;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;

  ${TransitionEffectStyles}
`;

export const PhoneLogoContainer = styled.a`
  ${LinksContainerStyles}
  padding : 1rem 0;
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: start;
`;

export const EmailContainer = styled.a`
  font-size: 1.8rem;
  padding: 1rem;
  cursor: pointer;
  color: #493e8b;

  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: center;
  align-self: center;

  ${TransitionEffectStyles}

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 1.8rem;
    align-self: start;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    font-size: 1.8rem;
  }
`;

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 5rem);

  width: 22%;
  border-top: 0.1rem solid #493e8b;
  font-size: 5rem;
  opacity: 0.9;
  margin: 0;

  @media screen and (min-width: 1900px) {
    width: 15%;
  }

  @media screen and (max-width: 1200px) {
    width: 25%;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 50%;
    grid-gap: 2rem;
  }

  @media screen and (max-width: 900px) {
    width: 40%;
  }

  @media screen and (max-width: 425px) {
    width: 80%;
  }

  @media only screen and (max-width: 414px) and (max-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    width: 90%;
  }

  @media only screen and (max-width: 412px) and (max-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    width: 80%;
  }

  @media only screen and (max-width: 375px) and (max-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    width: 80%;
  }

  @media only screen and (max-width: 360px) and (max-height: 760px) and (-webkit-device-pixel-ratio: 4) {
    width: 90%;
  }
`;

export const RocketContainer = css`
  animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: -0.1s;
  animation-duration: 1.5s;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    0%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const RocketHomeContainer = styled.img`
  ${RocketContainer}
  width: 30rem;
  height: auto;
`;
