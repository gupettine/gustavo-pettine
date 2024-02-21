import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

    display: flex;
    align-items: center;
    gap: 16px;

    transition: color 0.8s ease;

    &:hover {
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    }
`;