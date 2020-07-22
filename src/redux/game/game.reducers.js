import {gameActionTypes} from './game.types';

import board from '../../utils/board';

const INITIAL_STATE = {
    isGameOn: false,
    board:[]
}

const gameReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case gameActionTypes.START_GAME_STATE:
            return{
                ...state,
                isGameOn: true,
                board: board(100, 10, 10)
            }
        case gameActionTypes.EXIT_GAME_STATE:
            return{
                ...state,
                isGameOn: false,
                board: []
            }
        default:
            return state
    }
}

export default gameReducer;