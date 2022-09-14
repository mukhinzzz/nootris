import * as S from "./Basket.styles";
import basket from "../../../img/basket.svg";

export function Basket({ goodsAmount = 1 }) {
  return (
    <S.Basket>
      <S.BasketIcon src={basket} />
      <S.BasketCounter>{goodsAmount}</S.BasketCounter>
    </S.Basket>
  );
}
