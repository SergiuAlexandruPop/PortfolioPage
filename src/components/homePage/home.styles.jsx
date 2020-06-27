import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const LinksContainerStyles = css`
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #493e8b;
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfilePictureContainer = styled.div`
  borderradius: "40%";
`;

export const NameContainer = styled.h1`
  display: grid | inline-grid;
  grid-gap: 3rem;
  justify-items: center;
  font-size: 5rem;
  opacity: 0.9;
  margin: 0;
  margin-top: 4rem;
`;

export const ProfessionName = styled.h1`
  color: #6558ad;
  font-size: 3rem;
  opacity: 0.9;
  margin: 0 1;
`;

export const OptionLink = styled(Link)`
  ${LinksContainerStyles}
`;

export const PhoneNumberContainer = styled.a`
  ${LinksContainerStyles}
  padding : 1rem 0;
  margin-left: -4rem;
`;

export const EmailContainer = styled.a`
  font-size: 1.8rem;
  padding: 1rem;
  cursor: pointer;
  color: #493e8b;
  margin-left: -6rem;
`;

export const FooterContainer = styled.footer`
  display: grid;
  justify-content: space-around;
  width: 17%;
  grid-template-columns: 50% 50%;
  border-top: 0.1rem solid #493e8b;
  font-size: 5rem;
  opacity: 0.9;
  margin: 0;
`;

export const RocketContainer = styled.div`
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
