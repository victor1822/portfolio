import React from "react";
import { TextHighlight, Typography } from "../Components/Typography";
import { MainContent } from "../Components/MainContent";
import Link from "next/link";
import styled, { ThemeDTO } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: Column;
  padding: 42px 32px;
  flex: 1;
  gap: 16px;
`

interface ImageWrapperProps {
  theme?: ThemeDTO;
}

const CurvedShapeImage = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  z-index: 1;
  &:before {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.main.darkGray};
    font-weight: bold;
    transition: 0.25s;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 20px;
    left: -20px;
    background-color: ${props => props.theme.colors.main.lightBlue};
    z-index: -1;
    border-radius: 50%;
    content: 'Click here to download my CV';
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes forwardAnimation {
    0%  { 
      top: 20px;
      left: -20px;
      z-index: -1;
    }
    50% {
      top: 100px;
      left: -100px;
      z-index: 1;
    }
    100% { 
      inset: 0;
      z-index: 2;
    }
  }
  &:after {
    transition: 0.25s;
    width: 300px;
    height: 300px;
    position: absolute;
    top: -20px;
    left: 20px;
    content: '';
    background-color: ${props => props.theme.colors.secondary.alert};
    z-index: -2;
    border-radius: 50%;
  }
  @keyframes infiniteAnimation {
    0%  { 
      top: 20px;
      left: 0px;
      z-index: -1;
    }
    25% {
      top: -20px;
      left: -20px;
      z-index: -1;
    }
    75% {
      top: -20px;
      left: 20px;
      z-index: -1;
    }
    100% { 
      top: 20px;
      left: 0px;
      z-index: -1;
    }
  }
  &:hover:after {
    animation: infiniteAnimation 1s infinite normal;
  }
  &:hover:before {
    animation: forwardAnimation 0.4s ease forwards;
  }
`

const HorizontalBox = styled.div`
  display: flex;
  flex: 1;
  gap: 64px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`

const VerticalBox = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

interface StyledIconProps {
  theme?: ThemeDTO;
}

const StyledIcon = styled(FontAwesomeIcon)<StyledIconProps>`
  color: ${props => props.theme.colors.main.white};
  opacity: 50%;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  transition: 0.25s;
`;

const CiandtLink = styled(TextHighlight)<{ theme?: ThemeDTO }>`
  transition: 0.25s;
  &:hover {
    color: ${props => props.theme.colors.main.white};
  }
`;

const CvLink = styled(Link)`
  cursor: pointer;
  @media (min-width: 840px) {
    display: none;
    visibility: hidden;
  }
`

const CvTip = styled(Typography)`
  @media (max-width: 840px) {
    display: none;
    visibility: hidden;
  }
`

const ProfilePictureContainer = styled.div`
   @media (max-width: 840px) {
    display: none;
    visibility: hidden;
  }
`

function App() {
  return (
    <MainContent>
      <Container>
        <HorizontalBox>
          <VerticalBox style={{ maxWidth: '410px' }}>
            <Typography $variant="maintitle" color="white">
              Hey!!&nbsp;I am&nbsp;
              <TextHighlight color="lightBlue">Victor Sales,&nbsp;</TextHighlight>
              <br/>a passionate&nbsp; 
              <TextHighlight color="lightBlue">Front End Developer&nbsp;</TextHighlight>
              currently honing my skills
              <CiandtLink color="alert">&nbsp;
                <Link href="https://ciandt.com/">at CI&T&#8599;</Link>
              </CiandtLink>
            </Typography>
            <Typography $variant="text" color="white">
            🚧 You've landed on my portfolio, which is a work in progress—a canvas where my creativity and technical expertise come to life. While I'm busy adding the finishing touches, I invite you to connect with me on LinkedIn for a deeper dive into my professional journey and experiences.
            </Typography>
            <CvLink href="https://drive.google.com/uc?export=download&id=1pwwCORQvFCtvVT16KN7PgsHf2BMtlQJB">
              <Typography $variant="span" color="warning">
                  Click here to download my CV!
              </Typography>
            </CvLink>
            <CvTip $variant="span" color="warning">
              🔍 Pssst... there's a little secret hidden behind my profile picture. Have you discovered it yet?
            </CvTip>
            <SocialMediaContainer>
              <Link href="https://github.com/victor1822">
                <StyledIcon 
                  icon={faGithub}
                  size="2x"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/victorsd/">
                <StyledIcon 
                  icon={faLinkedin}
                  size="2x"
                />
              </Link>
              <Link href="https://www.instagram.com/victorsd94/">
                <StyledIcon 
                  icon={faInstagram}
                  size="2x"
                />
              </Link>
            </SocialMediaContainer>
          </VerticalBox>
          <ProfilePictureContainer>
            <Link href="https://drive.google.com/uc?export=download&id=1pwwCORQvFCtvVT16KN7PgsHf2BMtlQJB">
              <ImageWrapper>
                <CurvedShapeImage src="https://avatars.githubusercontent.com/u/30930332?v=4" alt="uma imagem do victor"/>
              </ImageWrapper>
            </Link>
          </ProfilePictureContainer>
        </HorizontalBox>
      </Container>
    </MainContent>
  );
}

export default App;
