import styled from "styled-components";
import { colors } from "../../constants/colors";
import { media } from "../../constants/media";

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
  justify-content: space-between;

  @media ${media.mobile} {
    margin: 0 32px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const MenuItemIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 20px;
  cursor: pointer;

  @media ${media.desktop} {
    display: none;
  }

  @media ${media.small_notebook} {
    display: ${({ burger }) => (burger ? "none" : "inline")};
  }
  @media ${media.tablet} {
    display: ${({ burger }) => (burger ? "inline" : "none")};
  }

  transform: ${({ isMenuOpen, burger }) =>
    isMenuOpen && burger ? "rotate(90deg)" : ""};

  transition: transform 1s;
`;
