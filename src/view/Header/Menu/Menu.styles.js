import styled from "styled-components";
import { colors } from "./../../../constants/colors";

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  min-width: 956px;
  display: flex;
  gap: 40px;
  margin-right: 76px;
`;

export const MenuItem = styled.li`
  font-size: 18px;
  padding-right: 6px;
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
