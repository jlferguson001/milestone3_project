import {configureStore, combineReducers} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extention'

const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState, 
    middleware: middleware,
});

export default store;