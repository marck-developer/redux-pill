import { combineReducers } from 'redux';
import {reducer, FilterReducer,sessionReducer } from './filter/reducer';

const reducers = combineReducers({
  reducer,FilterReducer,sessionReducer
});

export default reducers;