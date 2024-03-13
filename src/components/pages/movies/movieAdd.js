import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as moviesActions from '../../../redux/actions/moviesAction'
import { useParams } from 'react-router-dom'

function withParam(Component){
    return props => <Component {...props} params={useParams()}/>
}

class movieAdd extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        var xxx = this.props.params;
        this.props.actions.getMovie(this.props.params);
    }

    componentWillReceiveProps(testProps){
        debugger;
    }

    onSubmit = (event) => {
        debugger;
        this.props.actions.addMovies(this.state);
    }

   
    handleChange = (e) => {
        debugger;
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    state = {
        title: '',
        desc: ''
    }

    render() {
        return (
            <>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Film Adı</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} placeholder="Film Adı" name="title" value={this.state.title} />
                        <Form.Text className="text-muted">
                            Filmin adını yazabilirisniz
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Açıklama</Form.Label>
                        <Form.Control type="text" onChange={this.handleChange} placeholder="Açıklama" name="desc" value={this.state.desc} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Kaydet
                    </Button>
                </Form>
            </>
        )
    }
}


function mapStatetoProps(state, props) {
    return {
        movies: state.moviesListReducer.movies
    };
}


function mapDispatchtoProps(dispatch) {
    return {
        actions: {
            addMovies: bindActionCreators(moviesActions.addMovie, dispatch),
            getMovie: bindActionCreators(moviesActions.getMoviesById, dispatch)
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(withParam(movieAdd))
