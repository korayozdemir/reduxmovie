import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function moviesList({ movies }) {
    return (
        <>
            {
                movies.map(movies => (
                    <Card key={movies.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://productimages.hepsiburada.net/s/11/375-375/9038762311730.jpg" />
                        <Card.Body>
                            <Card.Title>{movies.title}</Card.Title>
                            <Card.Text>
                                {movies.desc}
                            </Card.Text>
                            <Button as={Link} to={`/movies/${movies.id}`} variant="primary">Güncelle</Button>
                        </Card.Body>
                    </Card>

                ))
            }
        </>
    )
}

export default moviesList