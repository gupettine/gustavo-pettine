import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    /* button:hover, a:hover {
        filter: brightness(0.9);
    } */

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
        /* border-radius: 10px; */
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #c0bebe;
    }
`;