import styled from 'styled-components';

export const StyledGame = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    min-height: 100vh;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const GameControls = styled.div`
background-color: #ffe1e1;
width: 100%;
min-width: 300px;
max-width: 350px;
padding: 2rem;
box-sizing: border-box;

@media (max-width: 1000px) {
    width: 90%;
    padding: 1rem;
    margin-bottom: 1rem;
    order: 1;
}
`;