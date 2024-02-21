import { Container, Main, Content } from './styles';
import { Header } from '../../components/Header';
import { PageCard } from '../../components/PageCard';
import { ProjectCards } from '../../components/ProjectCards';

import logoCefet from '../../assets/logo_cefet.png';

export function Projects() {

  const projectsData = [
    {
      image: logoCefet,
      title: 'Decsys',
      organization: 'CEFET/RJ',
      location: 'Rio de Janeiro, Brazil',
      date: 'Feb. 2023 ‑',
      description: "The Decsys is a blockchain-based software developed for a graduation project to enhance user verification in a web system.",
      organizationTo: 'http://www.cefet-rj.br/',
      target: '_blank',
    },

    {
      image: logoCefet,
      title: 'Urban Anomalies',
      organization: 'CEFET/RJ',
      location: 'Rio de Janeiro, Brazil',
      date: 'Apr. 2022 ‑ Aug. 2022',
      description: "The Urban Anomalies is real-time software analyzing data from Rio de Janeiro buses to identify urban anomalies.",
      organizationTo: 'http://www.cefet-rj.br/',
      target: '_blank',
    },

    {
      image: logoCefet,
      title: 'Text Analyzer',
      organization: 'CEFET/RJ',
      location: 'Rio de Janeiro, Brazil',
      date: 'Aug. 2020 ‑ Jul. 2021',
      description: "The Text Analyzer is an AI model classifying human emotions in texts, using sophisticated algorithms to understand emotional nuances in written language.",
      organizationTo: 'http://www.cefet-rj.br/',
      target: '_blank',
    },
  ];

  return (
    <Container>

      <Header />

      <Main>
        <Content>
          
          <PageCard title="Projects" paragraph="Here are some of the projects I've worked on." />

          {projectsData.map((project, index) => (
            <ProjectCards
              key={index}
              image={project.image}
              title={project.title}
              organization={project.organization}
              location={project.location}
              date={project.date}
              description={project.description}
              organizationTo={project.organizationTo}
              target={project.target}
            />
          ))}

        </Content>
      </Main>

    </Container>
  );
}