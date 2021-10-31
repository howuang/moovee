import React from 'react'
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom";
import MoviesCards from '../components/MoviesCards';
import MoviesPagination from '../components/MoviesPagination';

const SearchPage = () => {

    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);

    const params = useParams();
    const { search } = params;

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${currentPage}&include_adult=false`;
            const res = await fetch(url);
            const result = await res.json();
            console.log("result", result)
            setTotalPage(result.total_pages);
            setMovies(result.results)
        }
        fetchData()
    }, [search, currentPage])

    return (
        <div className="main-content">
            <div>
                <MoviesCards movies={movies} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
            </div>
            <div className="d-flex">
                <MoviesPagination  currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
            </div>
        </div>

    )
}

export default SearchPage
