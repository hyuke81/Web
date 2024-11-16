import { useState } from "react";
import Card from "../card/Card.jsx";
import * as S from './movies.style.jsx';
import useCustomQuery from "../../hooks/useCustomQuery.js";
import SkeletonCard from '../skeleton/SkeletonCard.jsx';

const MoviesPage = () => {
    const [clickedMovie, setClickedMovie] = useState(null);

    const handleClicked = (movieId) => {
        setClickedMovie(movieId);
    };

    const { data: movies, isLoading, isError } = useCustomQuery(`/movie/popular?language=ko-KR&page=1`);
    
    if (isLoading) {
        return (
            <S.CardList>
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </S.CardList>
        );
    }

    if (isError) {
        return <div>
            <h1 style={{color: 'white'}}>Error...</h1>
        </div>;
    }

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