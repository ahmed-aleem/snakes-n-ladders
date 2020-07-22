import {diceActionTypes} from './dice.types';

const INITIAL_STATE = {
    diceValue: 5,
    diceState: true
}

export const diceReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case diceActionTypes.SET_DICE_VALUE:
            return {
                ...state,
                diceValue: action.payload,
                diceState: false
            }
        case diceActionTypes.SET_DICE_STATE:
            return {
                ...state,
                diceState: action.payload
            }
        default:
            return state
    }
}

export default diceReducer;