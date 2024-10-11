import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card.jsx";
import * as S from '../../styles/movies.style.jsx';

const Nowplaying = () => {
    const [movies, setMovies] = useState([]);
    const [clickedMovie, setClickedMovie] = useState(null);

    const handleClicked = (movieId) => {
        setClickedMovie(movieId);
    };

    useEffect(() => {
        const getMovies = async () => {
            try {
                
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}', {
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

export default Nowplaying;
