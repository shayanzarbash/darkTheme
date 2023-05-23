import { ADD_TO_PARAMETER } from './general-const';
import { MINUS_TO_PARAMETER } from './general-const';
import { MULTI_TO_PARAMETER } from './general-const';
import { AddToParameterAction } from './general-type';
import { MinusToParameterAction } from './general-type';
import { MultiToParameterAction } from './general-type';


export const addToParameter = (
    value: number
): AddToParameterAction => ({
    type: ADD_TO_PARAMETER,
    payload: {
        value: value
    }
});

export const minusToParameter = (
    value: number
): MinusToParameterAction => ({
    type: MINUS_TO_PARAMETER,
    payload: {
        value: value
    }
});

export const multiToParameter = (
    value: number
): MultiToParameterAction => ({
    type: MULTI_TO_PARAMETER,
    payload: {
        value: value
    }
});