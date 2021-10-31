import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
import MoviesPagination from '../components/MoviesPagination'
import MoviesCards from '../components/MoviesCards'


const Homepage = () => {

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);


    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = process.env.REACT_APP_API_KEY
            const baseURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${currentPage}`
            const res = await fetch(baseURL);
            const result = await res.json();
            setMovies(result.results)
            setTotalPage(result.total_pages);
        }
        fetchData()
    }, [currentPage])

    return (
        <div className="main-content">
            <div>
                <MainContent/>
            </div>
            <div>
                <MoviesCards movies={movies}/>
            </div>
            <div>
                <MoviesPagination  currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
            </div>
        </div>
    )
}

export default Homepage
