import * as S from "./Header.styles";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Basket } from "./Basket";

export function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Logo />
        <Menu />
        <Basket />
      </S.HeaderContainer>
    </S.Header>
  );
}
