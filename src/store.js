import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./reducers/index"

import { createLogger } from 'redux-logger';

const logger = createLogger({
    //options
});

export default function configureStore(state){

    return createStore(rootReducer, state, applyMiddleware(logger))
}