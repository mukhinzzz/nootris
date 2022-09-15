import styled from "styled-components";
import { colors } from "../../../constants/colors";

export const BurgerMenu = styled.div`
  display: flex;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  width: 400px;
  position: absolute;
  background-color: ${colors.black};
  top: 80px;
  right: 0px;
  border-radius: 0 0 20px 20px;
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transition: opacity 0.3s,
    visibility 0s ${({ isMenuOpen }) => (isMenuOpen ? "0s" : "0.3s")};
`;

export const BurgerMenuItem = styled.a`
  color: ${colors.white};
  margin: 0;
  font-size: 32px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${colors.menuGray};
  }

  &:active {
    color: ${colors.white};
  }
`;
