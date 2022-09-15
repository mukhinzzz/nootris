import * as S from "./Basket.styles";
import basket from "../../../img/basket.svg";

export function Basket({ goodsAmount = 1 }) {
  return (
    <S.Basket>
      <S.BasketIcon src={basket} alt="Your purchases" />
      <S.BasketCounter>{goodsAmount}</S.BasketCounter>
    </S.Basket>
  );
}
