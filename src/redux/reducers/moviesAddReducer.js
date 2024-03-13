import initialState from './initialState'
import * as actionTypes from '../actions/actionTypes'

export default function moviesAddReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_MOVIES:

            break;
        case actionTypes.ADD_MOVIES_REJECTED:

            break;
        case actionTypes.ADD_MOVIES_FULFILLED:

            break;
        case actionTypes.ADD_MOVIES_PENDING:

            break;
        default:
            return state;
    }
}