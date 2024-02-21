import { Container, Title, Paragraph } from './styles';

export function PageCard({ title, paragraph }) {

    return (
        <Container>

            <Title>{title}</Title>

            <Paragraph>{paragraph}</Paragraph>

        </Container>
    );
}