import { Container, Image, Content, TitleOrganizationContainer, LocationDateContainer, Title, Organization, Location, DateComponent } from './styles';

export function WorkCards({ image, title, organization, location, date, organizationTo, ...rest }) {

    return (
        <Container {...rest}>

            <Image>{image && <img src={image} alt="Imagem" />}</Image>

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

        </Container>
    );
}