import styled from 'styled-components';

export const Container = styled.div`
    /* border: 1px solid red; */

    grid-area: header;

    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Main = styled.div`
    margin: auto;

    width: 100%;
    max-width: 680px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* border: 1px solid red; */
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;

    list-style: none;
    cursor: pointer;
`;

export const ListItem = styled.li`
    padding: 6px 10px;
    background-color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.BACKGROUND_BORDER : 'transparent'};
    color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.TEXT_PRIMARY : theme.COLORS.TEXT_SECONDARY};
    border-radius: 8px;

    transition: color 0.8s ease;

    &:hover {
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    }
`;

export const ToggleTheme = styled.button`
    border: none;
    background: none;
    padding: 6px;
    border-radius: 50%;

    display: flex;
    align-items: center;

    transition: box-shadow 0.5s ease;

    > svg {
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        font-size: 20px;

        transition: color 0.8s ease;
    }

    &:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

        > svg {
            color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
        }
    }
`;