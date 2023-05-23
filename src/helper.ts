import { AddToParameterPayload, AppState } from './general-type';
import { MinusToParameterPayload } from './general-type';


export const initailAppState: AppState = {
    parameter: 0
}

export function addToParameter(state: AppState, payload: AddToParameterPayload): AppState {
    const {
        value
    } = payload;

    let newValue = state.parameter + value

    return {
        ...state,
        parameter: newValue
    }
}

export function minusToParameter(state: AppState, payload: MinusToParameterPayload): AppState {
    const {
        value
    } = payload;

    let newValue = state.parameter - value

    return {
        ...state,
        parameter: newValue
    }
}

export function multiToParameter(state: AppState, payload: MinusToParameterPayload): AppState {
    const {
        value
    } = payload;

    let newValue = state.parameter * value

    return {
        ...state,
        parameter: newValue
    }
}