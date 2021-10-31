import React, { useEffect, useState } from 'react'
import { CardGroup, Card, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const MoviesCards = ({movies}) => {
  
    return (
        <div>
            <Row xs={1} md={5} className="g-2">
                {movies.map((e) => (
                    <Col>
                    <Card className="card" as={Link} to={`/movie/${e.id}`}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} atl={e.title}/>
                        <Card.Body>
                                <Card.Title className="card-title">{e.title}</Card.Title>
                                <Card.Subtitle></Card.Subtitle>
                                <Card.Text>Release Date: {e.release_date}</Card.Text>
                                <Card.Text>Rating: {e.vote_average}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default MoviesCards
