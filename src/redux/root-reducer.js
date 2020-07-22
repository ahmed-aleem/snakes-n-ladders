import {combineReducers} from 'redux';

import gameReducer from './game/game.reducers';
import playerReducer from './player/player.reducers';
import diceReducer from './dice/dice.reducers';

const rootReducer = combineReducers({
    game: gameReducer,
    players: playerReducer,
    dice: diceReducer
})

export default rootReducer;