import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import rootReducer from "./index";
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger, promise)))
}