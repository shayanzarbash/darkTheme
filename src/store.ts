import { AppReducer } from './reducer';
import { initailAppState } from './helper';
import { createWrapper } from 'next-redux-wrapper';
import { legacy_createStore as createStore } from 'redux';

const store = () => createStore(AppReducer, initailAppState)

export const wrapper = createWrapper(store as any, {debug:false})