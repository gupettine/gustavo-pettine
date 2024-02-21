import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 400;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: default;
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

    /* cursor: pointer; */

    border-radius: 8px;

    transition: padding 0.8s ease, box-shadow 0.8s ease;

    &:hover {
        padding: 4px 4px 4px 10px;
        box-shadow: 0 0 10px ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }
`;

export const CategoryTitle = styled.h4`
    min-width: 128px;
    display: flex;
    align-items: center;
    font-weight: 400;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;