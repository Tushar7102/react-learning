import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Reducer as TheamReducer } from "./Them/Reducer";
import { Reducer as CounterReducer } from "./Counter/Reducer";
import { thunk } from "redux-thunk";



const rootreducer=combineReducers({TheamReducer,CounterReducer})
export const Store=legacy_createStore(rootreducer,applyMiddleware(thunk))