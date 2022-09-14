import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Text = styled.p`
  font-size: ${({ size }) => size};
  color: ${({ color }) => (color ? color : colors.black)};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`;
