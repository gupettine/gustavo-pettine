import { Container, Content } from "./styles";

export function Button({ icon1: Icon1, icon2: Icon2, title, ...rest }) {

    return (
        <Container {...rest}>
            <Content>
                {Icon1 && <Icon1 size={20} />}
                {title}
            </Content>

            {Icon2 && <Icon2 size={20} />}
        </Container>
    );
}