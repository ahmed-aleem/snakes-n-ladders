import React from 'react';

import {connect} from 'react-redux';
import {exitGameState} from '../../redux/game/game.actions';
import {setDiceState, setDiceValue} from '../../redux/dice/dice.actions';
import {movePlayers, setCurrentPlayer, movePlayersSNL} from '../../redux/player/player.actions';

import {isSnakeOrLadder, wait} from '../../utils/snl';
import {nextPosition} from '../../utils/player';

import {StyledDice, DisplayDiceValue} from './dice.styles';

const Dice = (props) => {

    const {diceState, diceValue, currentPlayer, players} = props;
    const {setDiceValue, setDiceState, setCurrentPlayer, movePlayers, movePlayersSNL, exitGameState}= props;

    const handleDiceRoll = async () => {

        const newDiceValue = Math.floor(Math.random() * 6 + 1);

        const nextMove = nextPosition(currentPlayer, players, newDiceValue);
        
        setDiceValue(newDiceValue);

        if(nextMove === 100){

            movePlayers(newDiceValue);
            await wait(800);
            alert(`${players[currentPlayer-1].playerName} has Won!`);
            exitGameState();

        } else if (nextMove > 100){
            await wait(200);
            alert(`Can't make ${newDiceValue} moves!!`);
            setCurrentPlayer();
            setDiceState(true);
        } else {
            
            movePlayers(newDiceValue);
            
            if(isSnakeOrLadder(nextMove)){
                await wait(800);
                movePlayersSNL();   
            }
            
            setCurrentPlayer();
            setDiceState(true);
        }
        
    }

    const playerColor = players[currentPlayer-1].playerColor;
   
    return (
        <React.Fragment>
            <DisplayDiceValue color={playerColor}>{diceValue}</DisplayDiceValue>
            <StyledDice onClick={diceState ? handleDiceRoll : null} color={playerColor} >
                Roll Dice 
            </StyledDice>
        </React.Fragment> 
     );
}
 
const mapStateToProps = state => ({
    diceValue: state.dice.diceValue,
    diceState: state.dice.diceState,
    players: state.players.players,
    currentPlayer: state.players.currentPlayer
})

const mapDispatchToProps = dispatchEvent => ({
    setDiceState: (value) => dispatchEvent(setDiceState(value)),
    setDiceValue: (value) => dispatchEvent(setDiceValue(value)),
    movePlayers: (value) => dispatchEvent(movePlayers(value)),
    movePlayersSNL: () => dispatchEvent(movePlayersSNL()),
    setCurrentPlayer: () => dispatchEvent(setCurrentPlayer()),
    exitGameState: () => dispatchEvent(exitGameState()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Dice);