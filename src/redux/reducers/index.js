import { combineReducers } from "redux"
import moviesListReducer from './moviesListReducer'
import moviesAddReducer from './moviesAddReducer'
import moviesReducers from './moviesReducers'
import moviesUpdateReducer from './moviesUpdateReducer'


const rootReducer = combineReducers({
    moviesListReducer,
    moviesAddReducer,
    moviesReducers,
    moviesUpdateReducer
})

export default rootReducer;