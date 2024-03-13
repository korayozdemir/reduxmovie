import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import rootReducer from "./index";
import { thunk } from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}