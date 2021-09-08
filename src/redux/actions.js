import { CHANGE__THEME, DECREASE, INCREASE, BLOCK__BTN } from "./types";


export function blockBtn(value = false) {
    return {
        type: BLOCK__BTN,
        disabled: value
    }
}

export function increment() {
    return {
        type: INCREASE,
    }
}
export function decrement() {
    return {
        type: DECREASE,
    }
}
export function asyncIncrement() {
    return function (dispatch) {
        dispatch(blockBtn(true))
        setTimeout(()=> {
            dispatch(increment())
            dispatch(blockBtn(false))
        },1500)
    }
}
export function changeTheme(theme) {
    return {
        type: CHANGE__THEME,
        payload: theme
    }
}