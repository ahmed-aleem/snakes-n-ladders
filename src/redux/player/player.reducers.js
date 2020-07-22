import {playerActionTypes} from './player.types';

import {getPlayers, movePlayers} from '../../utils/player';
import {movePlayersSNL} from '../../utils/snl';

const INITIAL_STATE = {
    nPlayers: 1,
    currentPlayer: 1,
    players: [],
}

const playerReducer = (state = INITIAL_STATE, action) =>{

    const {currentPlayer, players} = state;

    switch (action.type) {
        case playerActionTypes.SET_N_PLAYERS:
            return{
                ...state,
                nPlayers: action.payload
            }
        case playerActionTypes.INITIATE_PLAYERS:
            return{
                ...state,
                players: getPlayers(action.payload)
            }
        case playerActionTypes.MOVE_PLAYERS:
            return{
                ...state,
                players: movePlayers(currentPlayer, players, action.payload)
            }
        case playerActionTypes.SET_CURRENT_PLAYER:
            return{
                ...state,
                currentPlayer: currentPlayer < players.length ? currentPlayer + 1 : 1
            }
        case playerActionTypes.MOVE_PLAYERS_SNL:
            return {
                ...state,
                players: movePlayersSNL(currentPlayer, players)
            }
        default:
            return state;
    }
}

export default playerReducer;