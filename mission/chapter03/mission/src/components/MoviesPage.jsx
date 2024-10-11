import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import * as S from '../styles/movies.style.jsx';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [clickedMovie, setClickedMovie] = useState(null);

    const handleClicked = (movieId) => {
        setClickedMovie(movieId);
    };

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTk1OTFlNjU2ZDgzNWQxMWY3ZWU5NGFiMmRhNmFjZSIsIm5iZiI6MTcyODUzOTQ0OS4yNDQyMTIsInN1YiI6IjY3MDY1OWFjMDAzYzkyMTRhMGIzYjEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GeMtbBEO18jh6RyDtw9m8UvhQw867WCGz7mQhJHfKHQ`
                    }
                });
                setMovies(response.data.results || []);
            } catch (error) {
                console.error('Failed to fetch movies', error);
            }
        };
        getMovies();
    }, []);

    return (
        <S.CardList>
            {Array.isArray(movies) && movies.map((movie) => (
                <Card 
                    key={movie.id} 
                    movie={movie} 
                    clickedMovie={clickedMovie} 
                    handleClicked={handleClicked} 
                />
            ))}
        </S.CardList>
    );
};

export default MoviesPage;
