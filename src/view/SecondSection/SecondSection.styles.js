import styled from "styled-components";
import { colors } from "./../../constants/colors";

export const SecondSection = styled.section`
  height: 926px;
  padding-top: 110px;
  background: ${colors.black};
  box-sizing: border-box;
`;

export const SectionContainer = styled.div`
  margin: 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  color: ${colors.orange};
  &:first-line {
    color: ${colors.white};
  }
`;

export const PriceSection = styled.div`
  display: flex;
  margin-top: 80px;
  align-items: center;
  margin-left: 18px;
  width: 250px;
  justify-content: space-between;
`;

export const NewPrice = styled.span`
  color: ${colors.white};
  font-size: 48px;
`;

export const OldPrice = styled.div`
  color: ${colors.grey};
  position: relative;
  font-size: 36px;
  display: inline-block;
  &::after {
    content: " ";
    position: absolute;
    height: 2px;
    width: 112px;
    background-color: ${colors.grey};
    top: 50%;
    right: -13px;
    border-radius: 0.5px;
  }
`;

export const SubmitButton = styled.button`
  width: 256px;
  height: 56px;
  background-color: ${colors.orange};
  border-radius: 7px;
  border: none;
  font-size: 18px;
  margin-top: 67px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkOrange};
  }

  &:active {
    background-color: ${colors.lightOrange};
  }
`;
