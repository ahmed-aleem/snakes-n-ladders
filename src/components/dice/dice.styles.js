import styled from 'styled-components';

export const StyledDice = styled.button`
    background-color: ${props => props.color};
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    width: 100px;
    height: 100px;
    border: 5px solid ${props => props.color}a0;
    border-radius: 10px;
    box-shadow: 2px 4px 12px #cba0a0;
    padding: 20px;
    outline: none;
    cursor: pointer;
    @media (max-width: 1000px) {
        font-size: 16px;
        width: 70px;
        height: 70px;
        padding: 10px;
    }
`;

export const DisplayDiceValue = styled.span`
    display: block;
    font-size: 100px;
    font-weight: 900;
    padding: 1rem;
    color: #ff6f6f;

    @media (max-width: 1000px) {
        font-size: 60px;
        padding: .3rem;
    }
`