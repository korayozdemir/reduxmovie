import { combineReducers } from "redux"
import moviesListReducer from './moviesListReducer'

const rootReducer = combineReducers({
    moviesListReducer
})

export default rootReducer;