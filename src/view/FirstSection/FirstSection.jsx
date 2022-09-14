import * as S from "./FirstSection.styles";
import { Text } from "../Text";
import imageComposition from "../../img/imageComposition.png";

export function FirstSection() {
  return (
    <S.FirstSection>
      <S.SectionContainer>
        <S.MainInfo>
          <S.SectionHeader>Активируй иммунитет!</S.SectionHeader>
          <Text size="24px" width="672px" margin="33px 0 0 0">
            Всего пять секунд в день помогут укрепить иммунитет {<br />} и
            повысить защитные силы организма
          </Text>
        </S.MainInfo>
        <S.AdditionalInfo>
          <Text size="36px" margin="112px 0 0 0" bold>
            NOOTRIS ПОМОГАЕТ
          </Text>
          <Text size="18px" margin="8px 0 0 0">
            Вашему организму во время пандемии {<br />} и сезонных простуд
          </Text>
        </S.AdditionalInfo>
        <S.ImageComposition src={imageComposition} />
      </S.SectionContainer>
    </S.FirstSection>
  );
}
