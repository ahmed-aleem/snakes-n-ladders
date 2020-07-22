import React from 'react';
import {connect} from 'react-redux';

import {exitGameState} from '../../redux/game/game.actions';
import {setNPlayers} from '../../redux/player/player.actions';

import Button from '../button/button.component';
import Board from '../board/board.component';
import Players from '../players/players.component';
import Dice from '../dice/dice.component';

import {StyledGame, GameControls} from './game-controls.styles';

const Game = (props) => {

    const {exitGameState, setNPlayers} = props;

    const handleExitGame = () => {  
        if (window.confirm("Do you want to exit the game?")){
            exitGameState();
            setNPlayers(1);
        }
        
    }

    return ( 
        <StyledGame>
            <GameControls>
                <Dice/>
                <Players/>
                <Button onClick={handleExitGame}>Exit Game!</Button>
            </GameControls>
            <Board/>
        </StyledGame>
    );
}

const mapDispatchToProps = dispatchEvent => ({
    exitGameState: () => dispatchEvent(exitGameState()),
    setNPlayers: (value) => dispatchEvent(setNPlayers(value))
})

export default connect(null, mapDispatchToProps)(Game);