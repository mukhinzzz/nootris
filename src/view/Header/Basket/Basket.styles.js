import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const Basket = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 2px 0;
  margin-right: 24px;
  cursor: pointer;
`;

export const BasketIcon = styled.img`
  width: 32px;
  height: 28px;
`;

export const BasketCounter = styled.div`
  position: absolute;
  left: 24px;
  top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: ${colors.orange};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;
