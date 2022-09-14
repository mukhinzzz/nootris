import * as S from "./Menu.styles";

export function Menu() {
  return (
    <S.Menu>
      <S.MenuItem>
        <S.MenuLink href="#">FAQ</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="#">Оплата и доставка</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="#">Возврат</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="#">Исследования</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="#">Личный кабинет</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink href="tel: 888006000990">8 8 (800) 600-09-90</S.MenuLink>
      </S.MenuItem>
    </S.Menu>
  );
}
