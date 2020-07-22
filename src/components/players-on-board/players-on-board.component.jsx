import React from 'react';

import {connect} from 'react-redux';
import Player from '../player/player.component';

const PlayersOnBoard = (props) => {

    const {players, board} = props;

    return ( 
        <React.Fragment>
            {   
                board.length !== 0 &&

                players.map((player, index) => (
                    <Player key={index} {...player} board={board} />
                ))
            }
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    players: state.players.players,
    board: state.game.board
})

export default connect(mapStateToProps)(PlayersOnBoard);