import { combineReducers } from "redux";
import { BLOCK__BTN, DECREASE, INCREASE } from "./types"

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREASE: 
            state++
            break;
        case DECREASE: 
            state--
            break;
        default:
            return state
        
    }
    return state
}

function blockBtnReducer(state = {status: ''}, action) {
    switch (action.type) {
        case BLOCK__BTN:
            return {...state, status: action.disabled}
        default:
            return state
    }
}

const initialThemeState = {
    value: 'light'
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case 'CHANGE__THEME':
            return {...state, value: action.payload}
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    statusBtn: blockBtnReducer
})