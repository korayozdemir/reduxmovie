import { combineReducers } from "redux"
import moviesListReducer from './moviesListReducer'
import moviesAddReducer from './moviesAddReducer'
import moviesReducers from './moviesReducers'

const rootReducer = combineReducers({
    moviesListReducer,
    moviesAddReducer,
    moviesReducers
})

export default rootReducer;