import {playerActionTypes} from './player.types';

export const setNPlayers = (value) => ({
    type: playerActionTypes.SET_N_PLAYERS,
    payload: value
})

export const initiatePlayers = (value) => ({
    type: playerActionTypes.INITIATE_PLAYERS,
    payload: value
})

export const setCurrentPlayer = () => ({
    type: playerActionTypes.SET_CURRENT_PLAYER,
})

export const movePlayers = (value) => ({
    type: playerActionTypes.MOVE_PLAYERS,
    payload: value
})

export const movePlayersSNL = () => ({
    type: playerActionTypes.MOVE_PLAYERS_SNL
})