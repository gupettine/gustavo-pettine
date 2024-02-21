import { Container, Main, Content } from './styles';
import { Header } from '../../components/Header';
import { PageCard } from '../../components/PageCard';
import { Section } from '../../components/Section';
import { AboutText } from '../../components/AboutText';
import { ConnectText } from '../../components/ConnectText';
import { WorkText } from '../../components/WorkText';

export function About() {

  const sectionsData = [
    { title: 'About', component: <AboutText /> },
    { title: 'Connect', component: <ConnectText /> },
    { title: 'Work', component: <WorkText /> },
  ];

  return (
    <Container>

      <Header />

      <Main>
        <Content>
          
          <PageCard title="About Me" paragraph="Just a quick glimpse." />

          {sectionsData.map((section, index) => (
            <Section key={index} title={section.title}>
              {section.component}
            </Section>
          ))}

        </Content>
      </Main>
      
    </Container>
  );
}