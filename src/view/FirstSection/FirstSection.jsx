import * as S from "./FirstSection.styles";
import imageComposition from "../../img/imageComposition.png";
import nootris from "../../img/nootris.png";

export function FirstSection() {
  return (
    <S.FirstSection>
      <S.SectionContainer>
        <S.MainInfo>
          <S.SectionHeader>Активируй иммунитет!</S.SectionHeader>
          <S.SectionSubheader>
            Всего пять секунд в день помогут укрепить иммунитет {<br />} и
            повысить защитные силы организма
          </S.SectionSubheader>
        </S.MainInfo>
        <S.Nootris src={nootris} />
        <S.AdditionalInfo>
          <S.AdditionalHeader> NOOTRIS ПОМОГАЕТ</S.AdditionalHeader>
          <S.AdditionalSubheader>
            Вашему организму во время пандемии {<br />} и сезонных простуд
          </S.AdditionalSubheader>
        </S.AdditionalInfo>
        <S.ImageComposition
          src={imageComposition}
          alt="nootris with ginger and lemon"
        />
      </S.SectionContainer>
    </S.FirstSection>
  );
}
