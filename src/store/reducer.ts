import { Reducer } from 'redux';
import { addToParameter, minusToParameter, multiToParameter } from './helper';
import { initailAppState } from './helper';
import { ADD_TO_PARAMETER, MINUS_TO_PARAMETER, MULTI_TO_PARAMETER } from './general-const';
import { AppAction, AppState } from './general-type';

export const AppReducer: Reducer<AppState, AppAction> = (
    state: AppState = initailAppState,
    action: AppAction
): AppState => {
    console.log(state, action);

    switch (action.type) {
        case ADD_TO_PARAMETER:
            return addToParameter(state, action.payload);
        case MINUS_TO_PARAMETER:
            return minusToParameter(state, action.payload);
        case MULTI_TO_PARAMETER:
            return multiToParameter(state, action.payload);
        default:
            return state
    }
}