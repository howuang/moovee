import React, { useEffect, useState } from 'react'
import MainContent from '../components/MainContent'
// import MoviesPagination from '../components/MoviesPagination'
import MoviesCards from '../components/MoviesCards'


const Homepage = () => {

    const [movies, setMovies] = useState([]);
    const [movieClicked, setMovieClicked] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(10);


    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = "27557e4d1fe2bc4e3586b69c35f06379";
            const baseURL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
            const res = await fetch(baseURL);
            const result = await res.json();
            console.log(result)
            setMovies(result.results)
            // setTotalPage(result.total_pages);
        }
        fetchData()
    }, []);
    // }, [currentPage])

    return (
        <div className="main-content">

                <MainContent/>

                <MoviesCards movies={movies} setMovieClicked={setMovieClicked}/>
        </div>
    );
};

export default Homepage

           /* <div>
                <MoviesPagination  currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
            </div> */