import React from 'react';

import {connect} from 'react-redux';

import Box from '../box/box.component';
import PlayersOnBoard from '../players-on-board/players-on-board.component';

import {StyledBoard} from './board.styles';
import {StyledSNL} from '../styled-snl.styles';

const Board = ({board}) => {

    return ( 
        <StyledBoard>
            {
                board.map((box, index) => (
                    <Box key={index} {...box}/>
                ))
            }
            <StyledSNL/>
            <PlayersOnBoard />
        </StyledBoard>
    );
}
 
const mapStateToProps = state => ({
    board: state.game.board
})

export default connect(mapStateToProps)(Board);