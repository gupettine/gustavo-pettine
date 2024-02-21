import { Container, Main, Content } from './styles';
import { FiArrowUpRight } from "react-icons/fi";
import { Header } from '../../components/Header';
import { PageCard } from '../../components/PageCard';
import { Profile } from '../../components/Profile';
import { HomeText } from '../../components/HomeText';
import { ButtonText } from '../../components/ButtonText';
import { Skills } from '../../components/Skills';

export function Home() {

  return (
    <Container>

      <Header />

      <Main>
        <Content>

          <PageCard title="Gustavo Pettine" paragraph="“Make success a consequence of your effort.”" />

          <Profile />

          <HomeText />
          
          <ButtonText icon={FiArrowUpRight} title="Email me" to="mailto:gustavopettine20@gmail.com" />

          <Skills title="Skills" />
          
        </Content>
      </Main>
      

    </Container>
  );
}