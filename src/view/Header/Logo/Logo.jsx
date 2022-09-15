import * as S from "./Logo.styles";
import logo from "../../../img/logo.svg";

export function Logo() {
  return (
    <S.Logo href="/">
      <S.LogoIcon src={logo} />
    </S.Logo>
  );
}
