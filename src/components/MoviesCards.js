import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import 'swiper/swiper-bundle.min.css';


const MoviesCards = ({movies, setMovieClicked}) => {
    const API_KEY = "27557e4d1fe2bc4e3586b69c35f06379";
    const [show, setShow] = useState(false);
    const [trailerVid, setTrailerVid] = useState([]);
    const [modalTrailer, setModalTrailer] = useState([]);
    const history = useHistory();
    const handleMovieClick = (e) => {
        setMovieClicked(e);
        history.push(`/movie/${e.id}`);
    };

    const handleClose = () => setShow(false);
    const handleModal = (e) => {
        setTrailerVid(e); //Render out the video from Youtube
        setShow(true); //activate Modalbox when click on the Play Trailer button
    };
    useEffect(() => {
        const getData = async() => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${trailerVid.id}/videos?api_key=${API_KEY}`);
            const vid = await data.json();
            setModalTrailer(vid);
        }
        getData();
    }, [trailerVid]);
    console.log(movies);
    return (
        <div>
            <h1>What's trending</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                  }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {movies && movies?.map((e) =>  {
                    return (
                    <SwiperSlide key={e.id}>
                        <img onClick={() => {handleMovieClick(e); }} src={`https://image.tmdb.org/t/p/original${e?.poster_path}`} alt="show poster" style={{width:"300px"}}></img>
                        <Button onClick={() => handleModal(e)} className="btn play-btn white">Play Trailer</Button>
                    </SwiperSlide>
                    );
                    })}
            </Swiper>
            <div>
                <Modal show={show} onHide={handleClose} animation={false} className="modal-container" size="xl" aria-labelledby="example-modal-sizes-title-xl"> 
                    <Modal.Body closeButton className="modal-content">
                        {
                            modalTrailer.results ? <iframe
                                width={"853"}
                                height={"480"}
                                src={`https://www.youtube.com/embed/${modalTrailer.results[0]?.key}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="video__btn-lm"
                            /> : <iframe
                                width={"853"}
                                height={"480"}
                                src={`https://www.youtube.com/embed/Rb_tqxQKSPM?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="video__btn-lm"
                            />
                        }
                    </Modal.Body >
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal >
            </div >
        </div>
    )
}
SwiperCore.use([Navigation, Pagination, A11y]);
export default MoviesCards


/* <Row xs={1} md={5} className="g-2">
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
        <Button onClick={() => handleModal(e)} className="btn play-btn white">Play Trailer</Button>
        </Col>
    ))}
</Row> */