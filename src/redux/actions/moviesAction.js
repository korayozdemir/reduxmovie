import * as actionTypes from './actionTypes'


export function getMoviesSuccess(movies) {
    return {
        type: actionTypes.GET_MOVIES,
        payload: movies
    }
}


export function getMovies() {
    let url = "http://localhost:3004/movies";
    return function (dispatch) {
        return fetch(url).then(response => response.json())
            .then(result => dispatch(getMoviesSuccess(result)))

    }
}