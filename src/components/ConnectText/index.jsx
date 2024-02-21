import { Container, Content } from './styles';
import { Text } from '../Text';
import { Button } from '../Button';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import curriculum from '../../assets/gustavo-pettine-cv.en.pdf';

export function ConnectText() {

    const buttonsData = [
        { icon: FaEnvelope, title: 'Email', to: 'mailto:gustavopettine20@gmail.com' },
        { icon: FaFileAlt, title: 'Curriculum', to: curriculum, target: '_blank' },
        { icon: FaGithub, title: 'GitHub', to: 'https://github.com/gupettine', target: '_blank' },
        { icon: FaLinkedin, title: 'LinkedIn', to: 'https://www.linkedin.com/in/gustavopettine/', target: '_blank' },
    ];

    return (
        <Container>

            <Text>
                Have a question or just want to chat? Feel free to email me.
            </Text>

            <Content>

                {buttonsData.map((button, index) => (
                    <Button 
                        key={index} 
                        icon1={button.icon} 
                        title={button.title} 
                        icon2={FiArrowUpRight} 
                        to={button.to} 
                        target={button.target} 
                    />
                ))}
                
            </Content>

        </Container>
    );
}