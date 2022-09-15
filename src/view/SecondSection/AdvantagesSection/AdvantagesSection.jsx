import * as S from "./AdvantagesSection.styles";
import ginger from "../../../img/ginger.png";
import virus from "../../../img/virus.png";
import nootris from "../../../img/nootris.png";

export function AdvantagesSection() {
  return (
    <S.AdvantagesSection>
      <S.AdvantageCard order={1}>
        <S.AdvantageImage src={ginger} />
        <S.AdvantageText>
          Содержит {<br />}
          имбирь
        </S.AdvantageText>
      </S.AdvantageCard>
      <S.AdvantageCard order={3}>
        <S.AdvantageImage src={nootris} margin="9px 0 0 0" nootris />
        <S.MainAdvantageText>
          <S.MainAdvantageHeader>
            +&nbsp;Бесплатная доставка
          </S.MainAdvantageHeader>
          <S.MainAdvantageDescription>
            Специальная цена
          </S.MainAdvantageDescription>
        </S.MainAdvantageText>
      </S.AdvantageCard>
      <S.AdvantageCard order={2}>
        <S.AdvantageImage src={virus} margin="8px 0 0 0" />
        <S.AdvantageText>
          Нейтрализует <br />
          вирусы
        </S.AdvantageText>
      </S.AdvantageCard>
    </S.AdvantagesSection>
  );
}
