import React from 'react';
import {connect} from 'react-redux';

import {startGameState} from '../../redux/game/game.actions';
import {setNPlayers, initiatePlayers} from '../../redux/player/player.actions';

import Button from '../button/button.component';

import {StyledSelect} from '../select/select.styles';
import {StyledPreviewGame} from './preview-game.styles';

const PreviewGame = (props) => {

    const {nPlayers} = props;
    const {startGameState, setNPlayers, initiatePlayers} = props;

    const handleStartGame = () => {
        startGameState();
        initiatePlayers(nPlayers);

    }

    return ( 
        <div>
            <h1>Snakes and Ladders!</h1>
            <h3>Choose number of players</h3>
            <StyledSelect value={nPlayers} onChange={(e) => setNPlayers(e.target.value)}>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
            </StyledSelect>
            <StyledPreviewGame />
            <Button onClick={handleStartGame}>Start Game</Button> 
        </div>
    );
}

const mapStateToProps = state => ({
    nPlayers: state.players.nPlayers
})

const mapDispatchToProps = dispatchEvent => ({
    startGameState: () => dispatchEvent(startGameState()),
    setNPlayers: (value) => dispatchEvent(setNPlayers(value)),
    initiatePlayers: (value) => dispatchEvent(initiatePlayers(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewGame);