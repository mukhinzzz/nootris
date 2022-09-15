import * as S from "./Header.styles";
import { useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Basket } from "./Basket";
import { BurgerMenu } from "./BurgerMenu";
import phone from "../../img/phone.png";
import profile from "../../img/profile.png";
import burger from "../../img/burger.png";

export function Header() {
  const ref = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  useOnClickOutside(ref, handleClickOutsideBurger);

  function handleClickOutsideBurger(e) {
    if (!e.target.classList.contains("burgerButton")) {
      setMenuOpen(false);
    }
  }

  function handleBurgerClick() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <S.Header>
      <S.HeaderContainer>
        <Logo />
        <Menu />
        <S.IconsContainer>
          <S.MenuItemIcon src={phone} alt="Call us" />
          <S.MenuItemIcon src={profile} alt="Your profile" />
          <Basket />
          <S.MenuItemIcon
            src={burger}
            alt="Open menu"
            onClick={handleBurgerClick}
            className="burgerButton"
            isMenuOpen={isMenuOpen}
            burger
          />
        </S.IconsContainer>
      </S.HeaderContainer>
      <div ref={ref}>
        <BurgerMenu isMenuOpen={isMenuOpen} opacity={isMenuOpen ? "1" : "0"} />
      </div>
    </S.Header>
  );
}
