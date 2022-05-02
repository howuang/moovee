import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { Simulate } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {useParams} from "react-router-dom";

const MoviePage = () => {

    const API_KEY = "27557e4d1fe2bc4e3586b69c35f06379";

    const [movie, setMovie] = useState({})
    const [similarMovies, setSimilarMovies] = useState([]);
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

    useEffect(() => {
        const getSimilarData = async () => {
            const url2 = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
            const res2 = await fetch(url2);
            const result2 = await res2.json();
            setSimilarMovies(result2.results);
        }
        getSimilarData()
    }, [id]);
    // console.log(similarMovies);
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:"352px"}} alt={movie.title}/>
                <Card.Body>
                    <Card.Title className="card-title">{movie.title}</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                    <Card.Text>Release Date: {movie.release_date}</Card.Text>
                    <Card.Text>Rating: {movie.vote_average}</Card.Text>
                </Card.Body>
            </Card>
            <div className="similarMovies">
            <h3>You may also like</h3>
            <div className="similarMovies-container" style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {similarMovies && similarMovies.map((e) => {
                return (
                    <Card style={{ width: '18rem', marginBottom:"1rem" }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${e?.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{e?.title || e?.original_title}</Card.Title>
                            <Card.Text>
                                Viewers' Rating: {e?.vote_average}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
            </div>
        </div>
    )
}

export default MoviePage;
