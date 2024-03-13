
import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function moviesListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_MOVIES_WITHID:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state;
    }
}

