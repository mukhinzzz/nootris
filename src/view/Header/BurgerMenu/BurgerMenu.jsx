import * as S from "./BurgerMenu.styles";

export function BurgerMenu({ isMenuOpen }) {
  return (
    <S.BurgerMenu isMenuOpen={isMenuOpen}>
      <S.BurgerMenuItem href="#">FAQ</S.BurgerMenuItem>
      <S.BurgerMenuItem href="#">Оплата и доставка</S.BurgerMenuItem>
      <S.BurgerMenuItem href="#">Возврат</S.BurgerMenuItem>
      <S.BurgerMenuItem href="#">Исследования</S.BurgerMenuItem>
      <S.BurgerMenuItem href="#">Личный кабинет</S.BurgerMenuItem>
      <S.BurgerMenuItem href="tel: 888006000990">
        8 8 (800) 600-09-90
      </S.BurgerMenuItem>
    </S.BurgerMenu>
  );
}
