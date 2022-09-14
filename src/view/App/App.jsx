import * as S from "./App.styles";
import { Header } from "../Header";
import { FirstSection } from "../FirstSection";
import { SecondSection } from "../SecondSection";

export function App() {
  return (
    <S.App>
      <Header />
      <FirstSection />
      <SecondSection />
    </S.App>
  );
}
