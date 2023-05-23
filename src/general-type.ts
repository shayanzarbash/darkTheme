import { Action, } from 'redux';

export interface AppAction<T = string, P = any> extends Action {
    type: T;
    payload: P;
}

export interface AppState {
    parameter: number
}

export interface AddToParameterAction {
    type: string
    payload: AddToParameterPayload
}

export interface MinusToParameterAction {
    type: string
    payload: MinusToParameterPayload
}

export interface MultiToParameterAction {
    type: string
    payload: MultiToParameterPayload
}


export interface AddToParameterPayload {
    value: number
}

export interface MinusToParameterPayload {
    value: number
}

export interface MultiToParameterPayload {
    value: number
}