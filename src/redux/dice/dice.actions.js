import {diceActionTypes} from './dice.types';

export const setDiceValue = (value) => ({
    type: diceActionTypes.SET_DICE_VALUE,
    payload: value
})

export const setDiceState = (value) => ({
    type: diceActionTypes.SET_DICE_STATE,
    payload: value
})