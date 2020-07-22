import React from 'react';

import {StyledBox, BoxNumber} from './box.styles';

const Box = (props) => {
    
    return ( 
        <StyledBox {...props}>
            <BoxNumber>{props.boxId}</BoxNumber>
        </StyledBox>
    );
}

export default Box;