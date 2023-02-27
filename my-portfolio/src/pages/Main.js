import styled from "styled-components";
import Header from "../components /header";
const Main = () => {
  return (
    <SContainer>
      <Header />
      <SIntroduction>안녕하세요. 김나율입니다:)</SIntroduction>
      <SAboutme></SAboutme>
      <SProject></SProject>
      <SContact></SContact>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SIntroduction = styled.div`
  height: 60vh;
  width: 100%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SAboutme = styled.div`
  height: 40vh;
  width: 100%;
  background-color: yellow;
`;
const SProject = styled.div`
  height: 40vh;
  width: 100%;
  background-color: white;
`;
const SContact = styled.div`
  height: 40vh;
  width: 100%;
  background-color: pink;
`;
export default Main;
