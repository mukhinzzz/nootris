import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const AdvantagesSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 111px;
  margin-top: 43px;
`;

export const AdvantageCard = styled.div`
  height: 291px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const AdvantageImage = styled.img`
  margin: ${({ margin }) => margin};
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
`;

export const MainAdvantageText = styled.div``;

export const MainAdvantageHeader = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 36px;
  margin: 0;
  position: relative;
  right: 7px;
`;

export const MainAdvantageDescription = styled.p`
  color: ${colors.orange};
  text-align: center;
  font-size: 24px;
  margin: 8px 0 0 0;
`;
