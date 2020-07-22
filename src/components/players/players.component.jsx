import React from 'react';

import {connect} from 'react-redux';

import Player from '../player/player.component';
import {StyledPlayers} from './players.styles';

const Players = ({players, currentPlayer}) => {
    return ( 
        <StyledPlayers>
            {
                players.length >1 && players.map((player, index) => (
                    <Player key={index+1} {...player} currentPlayer={currentPlayer}/>
                ))
            }
        </StyledPlayers>
     );
}

const mapStateToProps = state => ({
    players: state.players.players,
    currentPlayer: state.players.currentPlayer
})

export default connect(mapStateToProps)(Players);