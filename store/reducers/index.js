import { combineReducers } from "redux";
import ProductReducer from '../reducers/reducer';
import ProductReducerThunk from "./reducerThunk";

export default combineReducers({
    productState: ProductReducer,
    productThunkState: ProductReducerThunk,
});