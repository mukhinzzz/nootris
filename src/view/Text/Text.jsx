import * as S from "./Text.styles";

export function Text({ size, color, bold, width, margin, children }) {
  return (
    <S.Text size={size} color={color} bold={bold} width={width} margin={margin}>
      {children}
    </S.Text>
  );
}
