import React from 'react';

import {StyledPlayer, StyledPlayerContainer} from './player.styles';

const Player = (props) => {

    const {board, currentPosition, playerId, playerColor, currentPlayer} = props;

    let comToRender;
    
    if(board){
        
        const box = board.filter((box) => currentPosition === box.boxId)[0]; 

        comToRender = (
        <StyledPlayerContainer box={box} cp={currentPosition===0}>
            <StyledPlayer color={playerColor} id={playerId} />
        </StyledPlayerContainer> )

    } else {
  
        comToRender = <StyledPlayer color={playerColor} active={playerId === currentPlayer}/>
  
    }

    return comToRender
}
 
export default Player;