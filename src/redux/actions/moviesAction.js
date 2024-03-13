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


export function getMoviesById(movieId) {
    let url = "http://localhost:3004/movies/" + movieId;
    return dispatch => {
        dispatch({
            type: actionTypes.GET_MOVIES_WITHID,
            payload: fetch(url).then(response => response.json())
        })
    }
}


export function addMovie(movie) {
    debugger;
    let url = "http://localhost:3004/movies";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    }
    return dispatch => {
        dispatch({
            type: actionTypes.ADD_MOVIES,
            payload: fetch(url, requestOptions).then(response => console.log(response.json()))
        })
    }
} 