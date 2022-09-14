import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Header = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
`;

export const HeaderContainer = styled.nav`
  margin: 0 64px;
  width: 100%;
  display: flex;
  align-items: center;
`;
