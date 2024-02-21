import { Container, Image, Main, Content, TitleOrganizationContainer, LocationDateContainer, Title, Organization, Location, DateComponent, Description } from './styles';

export function ProjectCards({ image, title, organization, location, date, description, organizationTo, ...rest }) {

    return (
        <Container {...rest}>

            <Image>{image && <img src={image} alt="Imagem" />}</Image>

            <Main>

                <Content>

                    <TitleOrganizationContainer>
                        <Title>{title}</Title>
                        {/* <Organization>{organization}</Organization> */}

                        {organizationTo ? (
                            <Organization to={organizationTo} target={rest.target}>
                                {organization}
                            </Organization>
                        ) : (
                            <Organization>{organization}</Organization>
                        )}
                    </TitleOrganizationContainer>

                    <LocationDateContainer>
                        <Location>{location}</Location>
                        <DateComponent>{date}</DateComponent>
                    </LocationDateContainer>

                </Content>

                <Description>{description}</Description>

            </Main>

        </Container>
    );
}