import { Container, Content } from './styles';
import { Text } from '../Text';
import { WorkCards } from '../WorkCards';

import logoCefet from '../../assets/logo_cefet.svg';
import logoAlmeida from '../../assets/logo_pinto_de_almeida.svg';

export function WorkText() {

    const textData = [
        "1+ years of professional development experience.",
        "I started my professional journey as an administrative assistant in a construction company, where I was responsible for organizing the company's files.",
        "Throughout my academic journey, I actively participated in significant projects, such as scientific initiation and an applied project in data analysis. My academic experience is reflected in the current development of software as part of my course completion, exploring the innovative use of Blockchain for KYC methods, aiming at user verification and validation in a web system.",
        "Currently, I'm a full stack engineer and am eager to continue my career. I'm seeking my first job opportunity where I can apply and enhance my technical skills, contributing significantly to challenging projects."
    ];

    const workData = [
        {
          image: logoCefet,
          title: 'Full Stack Engineer',
          organization: 'CEFET/RJ',
          location: 'Rio de Janeiro, Brazil',
          date: 'Feb. 2023 ‑',
          organizationTo: 'http://www.cefet-rj.br/',
          target: '_blank',
        },

        {
          image: logoCefet,
          title: 'Python Developer',
          organization: 'CEFET/RJ',
          location: 'Rio de Janeiro, Brazil',
          date: 'Apr. 2022 ‑ Aug. 2022',
          organizationTo: 'http://www.cefet-rj.br/',
          target: '_blank',
        },

        {
          image: logoCefet,
          title: 'Python Developer',
          organization: 'CEFET/RJ',
          location: 'Rio de Janeiro, Brazil',
          date: 'Aug. 2020 ‑ Jul. 2021',
          organizationTo: 'http://www.cefet-rj.br/',
          target: '_blank',
        },

        {
          image: logoAlmeida,
          title: 'Administrative Assistant',
          organization: 'Pinto de Almeida Engenharia S/A',
          location: 'Niterói, Brazil',
          date: 'Mar. 2015 ‑ Jul. 2016',
          organizationTo: 'https://pintodealmeida.com.br/',
          target: '_blank',
        },
    ];

    return (
        <Container>

            {textData.map((text, index) => (
                <Text key={index}>{text}</Text>
            ))}

            <Content>
                
                {workData.map((work, index) => (
                    <WorkCards
                        key={index}
                        image={work.image}
                        title={work.title}
                        organization={work.organization}
                        location={work.location}
                        date={work.date}
                        organizationTo={work.organizationTo}
                        target={work.target}
                    />
                ))}
                
            </Content>

        </Container>
    );
}