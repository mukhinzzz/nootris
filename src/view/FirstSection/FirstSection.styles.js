import styled from "styled-components";
import background from "../../img/new_bg.png";

export const FirstSection = styled.section`
  min-height: 794px;
  background: url(${background}) no-repeat 0 0 / cover;
`;

export const SectionContainer = styled.div`
  margin: 0 64px;
  position: relative;
`;

export const SectionHeader = styled.h1`
  font-size: 144px;
  line-height: 152px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  color: white;
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
`;

export const ImageComposition = styled.img`
  position: absolute;
  top: -80px;
  right: -65px;
`;
