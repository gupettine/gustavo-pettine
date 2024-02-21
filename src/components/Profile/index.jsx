import { Container, Content, Image } from './styles';
import { ButtonText } from '../ButtonText';
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import avatar from '../../assets/avatar.png';
import curriculum from '../../assets/gustavo-pettine-cv.en.pdf';

export function Profile() {

    const buttonsData = [
        { icon: FaGithub, title: 'GitHub', to: 'https://github.com/gupettine', target: '_blank' },
        { icon: FaLinkedin, title: 'LinkedIn', to: 'https://www.linkedin.com/in/gustavopettine/', target: '_blank' },
        { icon: FaFileAlt, title: 'Curriculum', to: curriculum, target: '_blank' },
    ];

    return (
        <Container>

            <Image>
                <img src={avatar} alt="Profile picture" />
            </Image>

            <Content>

                {buttonsData.map((button, index) => (
                    <ButtonText 
                        key={index} 
                        icon={button.icon} 
                        title={button.title} 
                        to={button.to} 
                        target={button.target} 
                    />
                ))}

            </Content>
            
        </Container>
    );
}