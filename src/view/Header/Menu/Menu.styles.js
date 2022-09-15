import styled from "styled-components";
import { colors } from "./../../../constants/colors";
import { media } from "./../../../constants/media";

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 71.95%;
  display: flex;
  justify-content: space-between;
  margin-right: 6.71%;
`;

export const MenuItem = styled.li`
  font-size: 18px;

  @media ${media.small_notebook} {
    /* display: none; */
    display: ${({ phone, cabinet }) => (phone || cabinet ? "none" : "inherit")};
  }

  @media ${media.tablet} {
    display: none;
  }
  /* padding-right: 6px; */
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${colors.white};

  &:hover {
    color: ${colors.menuGray};
  }

  &:active {
    color: ${colors.white};
  }
`;
