import styled, { keyframes } from "styled-components";
import { media } from "../../constants/media";
import background from "../../img/bg.png";

const sectionAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const sizeAnimation = keyframes`
0% {
  width: 0%;
  min-width: 0px;
}
100% {
    width: 80%;
    min-width: 250px;
}
`;

export const FirstSection = styled.section`
  min-height: 794px;
  background: url(${background}) no-repeat 0 0 / cover;

  @media ${media.mobile} {
    min-height: 694px;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  margin: 0 128px;

  @media ${media.notebook} {
    margin: 0 64px;
  }

  @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 32px;
  }
`;

export const MainInfo = styled.div`
  padding-top: 103px;
  position: relative;
  z-index: 1;
`;

export const AdditionalInfo = styled.div`
  width: 416px;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: ${sectionAnimation} 1.5s forwards 3s;

  @media ${media.small_notebook} {
    margin-top: 230px;
  }

  @media ${media.tablet} {
    margin-top: 275px;
  }

  @media ${media.mobile} {
    width: auto;
    margin: 0;
  }
`;

export const ImageComposition = styled.img`
  position: absolute;
  top: -80px;
  right: -65px;
  animation: ${sectionAnimation} 1s forwards;

  @media ${media.small_notebook} {
    height: 770px;
    top: 100px;
  }

  @media ${media.tablet} {
    height: 600px;
    width: auto;
    top: 270px;
    right: -30px;
  }

  @media ${media.mobile} {
    display: none;
  }
`;

export const Nootris = styled.img`
  display: none;

  @media ${media.mobile} {
    display: inline-block;
    margin: 60px 0 0 0;
    width: 80%;
    min-width: 250px;
  }

  animation: ${sizeAnimation} 1.5s linear forwards;
`;

export const SectionHeader = styled.h1`
  font-size: 144px;
  line-height: 152px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  color: white;
  animation: ${sectionAnimation} 1s forwards;

  @media ${media.small_notebook} {
    font-size: 100px;
    line-height: normal;
  }
  @media ${media.tablet} {
    font-size: 5em;
  }

  @media ${media.mobile} {
    font-size: 45px;
    line-height: normal;
    text-align: center;
  }
`;

export const SectionSubheader = styled.p`
  font-size: 24px;
  width: 672px;
  margin: 33px 0 0 0;
  opacity: 0;
  animation: ${sectionAnimation} 1s forwards 1.5s;

  @media ${media.small_notebook} {
    font-size: calc(24px * 0.7);
  }

  @media ${media.mobile} {
    width: auto;
    text-align: center;
  }
`;
export const AdditionalHeader = styled.p`
  font-size: 36px;
  margin: 112px 0 0 0;
  font-weight: 700;

  @media ${media.small_notebook} {
    font-size: calc(36px * 0.7);
  }

  @media ${media.mobile} {
    margin-top: 25%;
    text-align: center;
  }
`;

export const AdditionalSubheader = styled.p`
  font-size: 18px;
  margin: 8px 0 0 0;

  @media ${media.small_notebook} {
    font-size: calc(18px * 0.85);
  }

  @media ${media.mobile} {
    text-align: center;
  }
`;
