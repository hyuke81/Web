import { useState } from "react";
import Card from "../Card.jsx";
import * as S from '../../styles/movies.style.jsx';
import useCustomFetch from "../../hooks/useCustomFetch.js";
import useCustomLoading from "../../hooks/useCustomLoading.js";
import useCustomError from "../../hooks/useCustomError.js";

const Toprated = () => {
    const [clickedMovie, setClickedMovie] = useState(null);

    const handleClicked = (movieId) => {
        setClickedMovie(movieId);
    };

    const { data: movies, isLoading, isError } = useCustomFetch(`/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`);
    
    const loadingComponent = useCustomLoading(isLoading);
    const errorComponent = useCustomError(isError);

    if (loadingComponent) return loadingComponent;
    if (errorComponent) return errorComponent;

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

export default Toprated;