import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import {useParams} from "react-router-dom";

const MoviePage = () => {

    const API_KEY = "27557e4d1fe2bc4e3586b69c35f06379";

    const [movie, setMovie] = useState({})
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
            console.log(url)
            const res = await fetch(url);
            const result = await res.json();
            console.log(result);
            setMovie(result)
        }
        fetchData()
    }, [id])
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:"352px"}} atl={movie.title}/>
                <Card.Body>
                    <Card.Title className="card-title">{movie.title}</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>Release Date: {movie.release_date}</Card.Text>
                    <Card.Text>Rating: {movie.vote_average}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MoviePage
