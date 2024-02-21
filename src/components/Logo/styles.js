import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-size: 2.6rem;
    font-weight: bold;
`;