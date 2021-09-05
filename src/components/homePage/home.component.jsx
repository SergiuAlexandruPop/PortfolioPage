import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import rocket from "../../assets/gifs/rocket.gif";
import Header from "../header/header.component";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

import {
  NameContainer,
  HomePageContainer,
  ProfessionName,
  FooterContainer,
  RocketHomeContainer,
  FirstNameContainer,
  LastNameContainer,
  IconContainer, DividerContainer, IconContainerA,
} from "./home.styles";

const useStyles = makeStyles({
  tooltip: {
    fontSize: '1.8rem',
    backgroundColor: '#fff',
    color: '#8B80C6',
    transition: 'all 0.3s ease',
    opacity: '0.9'
  },
});


function HomePage() {
  const classes = useStyles();
  return (
    <HomePageContainer>
      <Header/>
      <NameContainer>
        <FirstNameContainer>Sergiu</FirstNameContainer>
        <LastNameContainer>Pop</LastNameContainer>
      </NameContainer>

      <ProfessionName>Software Developer</ProfessionName>
      <RocketHomeContainer src={rocket} alt="RochetGif"/>


      <DividerContainer>
        <Divider variant="middle"/>
      </DividerContainer>
      <FooterContainer>
        <IconContainer to={{pathname: "https://www.linkedin.com/in/sergiualexandrupop/"}}
                       target="_blank">
          <LinkedInIcon/>
        </IconContainer>
        <IconContainer to={{pathname: "https://github.com/SergiuAlexandruPop"}}
                       target="_blank">
          <GitHubIcon/>
        </IconContainer>
        <Tooltip title='0747016558' classes={{tooltip: classes.tooltip}}>
          <IconContainerA href="tel:0747016558">
            <CallIcon/>
          </IconContainerA>
        </Tooltip>
        <Tooltip title='sergiualexandrupop@gmail.com' classes={{tooltip: classes.tooltip}}>
          <IconContainerA href="mailto: sergiualexandrupop@gmail.com">
            <MailIcon/>
          </IconContainerA>
        </Tooltip>
        <IconContainer to={{pathname: "https://www.facebook.com/PopSergiuu"}}
                       target="_blank">
          <FacebookIcon/>
        </IconContainer>
        <IconContainer to={{pathname: "https://www.instagram.com/popsergiuu/"}}
                       target="_blank">
          <InstagramIcon/>
        </IconContainer>
      </FooterContainer>
    </HomePageContainer>
  );
}

export default HomePage;
