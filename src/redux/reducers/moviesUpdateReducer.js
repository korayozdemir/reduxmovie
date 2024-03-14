
import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function moviesUpdateReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_MOVIES:
            return {

            }
        case actionTypes.UPDATE_MOVIES_REJECTED:
            return {

            }
        case actionTypes.UPDATE_MOVIES_FULFILLED:
            return {

            }
        case actionTypes.UPDATE_MOVIES_PENDING:
            return {

            }
        default:
            return state;
    }
}

