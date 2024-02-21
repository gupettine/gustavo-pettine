import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

export const Image = styled.div`
    display: flex;
    align-items: center;

    width: 128px;
    height: 128px;
    border-radius: 50%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_IMAGE};

    > img {
        width: 100%;
        height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;