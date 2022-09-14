import * as S from "./SecondSection.styles";
import { AdvantagesSection } from "./AdvantagesSection";

export function SecondSection() {
  return (
    <S.SecondSection>
      <S.SectionContainer>
        <S.SectionHeader>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА {<br />} СО СКИДКОЙ -15% ПЕРВЫМ!
        </S.SectionHeader>
        <S.PriceSection>
          <S.OldPrice>750&#8381;</S.OldPrice>
          <S.NewPrice>690&#8381;</S.NewPrice>
        </S.PriceSection>
        <AdvantagesSection />
        <S.SubmitButton>Оформить заказ!</S.SubmitButton>
      </S.SectionContainer>
    </S.SecondSection>
  );
}
