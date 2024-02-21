import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 252px;
    height: 58px;

    padding: 0 16px;

    background: none;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_BORDER};
    
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: padding 0.8s ease, box-shadow 0.8s ease;

    &:hover {
        padding: 14px;
        box-shadow: 0 0 10px ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

    display: flex;
    align-items: center;
    gap: 16px;
`;