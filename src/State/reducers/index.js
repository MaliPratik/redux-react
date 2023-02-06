import { combineReducers } from "redux";
import amountReducer from './amountReducer';

let reducers = combineReducers ({
    amount:amountReducer
})
export default reducers;