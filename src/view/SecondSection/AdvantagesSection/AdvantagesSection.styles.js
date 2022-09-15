import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { media } from "./../../../constants/media";

export const AdvantagesSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 43px;

  @media ${media.tablet} {
    flex-direction: column;
    min-height: 550px;
    justify-content: space-between;
  }

  @media ${media.mobile} {
    min-height: 750px;
  }
`;

export const AdvantageCard = styled.div`
  height: 291px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${media.tablet} {
    flex-direction: row;
    height: auto;
    justify-content: space-evenly;
  }

  @media ${media.mobile} {
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
  }
`;

export const AdvantageImage = styled.img`
  margin: ${({ margin }) => margin};

  @media ${media.mobile} {
    width: ${({ nootris }) => (nootris ? "250px" : "auto")};
  }
`;

export const AdvantageText = styled.p`
  color: ${colors.orange};
  text-align: center;
  /* margin: 0 auto; */
  font-size: 18px;
  margin: 0;
  position: relative;
  right: 4px;

  &:first-line {
    color: ${colors.white};
  }

  @media ${media.tablet} {
    width: 125px;
    text-align: left;
  }
  @media ${media.tablet} {
    /* width: 125px; */
    text-align: center;
  }
`;

export const MainAdvantageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainAdvantageHeader = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 36px;
  margin: 0;
  position: relative;
  right: 7px;

  @media ${media.tablet} {
    text-align: left;
  }
  @media ${media.tablet} {
    font-size: 30px;
    text-align: center;
  }
`;

export const MainAdvantageDescription = styled.p`
  color: ${colors.orange};
  text-align: center;
  font-size: 24px;
  margin: 8px 0 0 0;
`;
