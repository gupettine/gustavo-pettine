import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 72px auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Main = styled.div`
    grid-area: content;
    /* overflow-y: auto; */
    padding: 64px 0;
`;

export const Content = styled.div`
    max-width: 680px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 32px;
`;