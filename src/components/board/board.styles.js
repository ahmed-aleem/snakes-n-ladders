import styled from 'styled-components';

export const StyledBoard = styled.div`
    width: 95vh;
    height: 95vh;
    max-width: 800px;
    max-height: 800px;
    position: relative;

    @media (max-width: 1000px) {
        flex-direction: column;
        width: 95vw;
        height: 95vw;
        margin: 1rem 0 1rem;
    }
`;