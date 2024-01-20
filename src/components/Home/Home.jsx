import { BtnReady, Container, SectionHero, Tittle } from './Home.styled';

export const Home = () => {
  return (
    <SectionHero>
      <Container>
        <Tittle>
          Drive into a New Experience: Discover Your Perfect Car with Our
          Extensive Catalog!
        </Tittle>
        <BtnReady to="/catalog">I am ready to choose</BtnReady>
      </Container>
    </SectionHero>
  );
};
