import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const MainContent = () => {
    
    const [movies, SetMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = process.env.REACT_APP_API_KEY
            const baseURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            const res = await fetch(baseURL);
            const data = await res.json();
            SetMovies(data.results)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Carousel fade className="carousel">
            <h1>TRENDING NOW</h1>
            {movies.map((e) => (
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-80"
                        src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                        alt={e.title}
                        />
                        <Carousel.Caption className="caption">
                        <h2>{e.title}</h2>
                        <p>{e.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
             ))
            }
            </Carousel>
        </div>
    )
}

export default MainContent