import styled from 'styled-components';

export const StyledBox = styled.div`

    width: ${props => props.width};
    height: ${props => props.height};
    transform: translate(${props => props.posX}0%, ${props => props.posY}0%);
    background-color: ${props => props.color};
    position: absolute;
`;

export const BoxNumber = styled.span`
    color: #7e5555;
    font-size: 12px;
    text-align: left;
    display: block;
    padding: 4px;
`;