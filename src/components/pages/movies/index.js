import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoviesList from './moviesList'
import { bindActionCreators } from 'redux'
import * as moviesActions from '../../../redux/actions/moviesAction'

class index extends Component {
    componentDidMount() {
        this.props.actions.getMovies();
    }

    render() {
        return (
            <>
                <MoviesList movies = {this.props.movies} />
            </>
        )
    }
}

const mapStatetoProps = state => {
    return {
        movies: state.moviesListReducer.movies
    }

}

function mapDispatchtoProps(dispatch) {
    return {
        actions: {
            getMovies: bindActionCreators(moviesActions.getMovies, dispatch)
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(index)
