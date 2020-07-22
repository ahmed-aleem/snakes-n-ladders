import {gameActionTypes} from './game.types';

export const startGameState = () => ({
    type: gameActionTypes.START_GAME_STATE,
})

export const exitGameState = () => ({
    type: gameActionTypes.EXIT_GAME_STATE,
})