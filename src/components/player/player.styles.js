import styled, { css } from 'styled-components'

export const StylingPlayer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    background-color: ${props => props.color};
    border-radius: 50%;
    @media (max-width: 1000px) {
        width: 20px;
        height: 20px;
    }
`;

export const StyledPlayer = styled(StylingPlayer)`

${props => props.active && css `
    transition: .3;
    border: 8px solid #555;
    box-shadow: 0 3px 8px #bbb;
`}

`

export const StyledPlayerContainer = styled.div`
    ${props => props.box && css`
    width: 10%;
    height: 10%;
    position: absolute;
    margin: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .8s linear;
    transform: translate(${props => props.box.posX}0%, ${props => props.box.posY}0%);
    `
    }

    ${props => props.cp && css`
        width: 10%;
        height: 10%;
        position: absolute;
        margin: 15px;
        transform: translate(-100%, 900%);
    `}
`;