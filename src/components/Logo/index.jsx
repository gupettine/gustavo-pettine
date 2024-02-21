import { Container } from './styles';

export function Logo({ title, ...rest }) {

    return (
        <Container {...rest}>
            {title}
        </Container>
    );
}