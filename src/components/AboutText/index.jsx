import { Container } from './styles';
import { Text } from '../Text';

export function AboutText() {

    const textArray = [
        "Hello, I'm Gustavo Pettine, a software engineer dedicated to creating innovative solutions through programming. In addition to my interest in the coding world, I devote my time to constant study.",
        "Currently, I'm completing the final semester of my Computer Science degree at the Federal University CEFET/RJ, and I'm excited to apply and expand the skills acquired, actively contributing to the development of technological solutions that positively impact the world around me.",
        "Furthermore, I like to balance this learning mindset with physical activities, such as playing soccer, and practicing martial arts, especially jiu-jitsu, a journey that I consider fundamental to my personal growth."
    ];

    return (
        <Container>

            {textArray.map((text, index) => (
                <Text key={index}>{text}</Text>
            ))}

        </Container>
    );
}