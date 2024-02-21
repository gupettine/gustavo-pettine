import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const Image = styled.div`
    min-width: 260px;
    height: 180px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_BORDER};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LOGO};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Content = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleOrganizationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LocationDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Organization = styled(Link)`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

    transition: color 0.8s ease;

    &:hover {
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    }
`;

export const Location = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: end;
`;

export const DateComponent = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: end;
`;

export const Description = styled.h1`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;