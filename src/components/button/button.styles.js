import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #393939;
    color: #fff;
    width: 45%;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem auto 0;
    cursor: pointer;
    outline: none;
    box-shadow: 0 8px 16px #bbb;

    @media (max-width: 1000px) {
        width: 75%;
    }

`