import { useState } from "react";
import Card from "../../card/Card.jsx";
import * as S from '../../moviepage_main/movies.style.jsx';
import useCustomFetch from "../../../hooks/useCustomFetch.js";

const Popular = () => {
    const [clickedMovie, setClickedMovie] = useState(null);

    const handleClicked = (movieId) => {
        setClickedMovie(movieId);
    };


    const { data: movies, isLoading, isError } = useCustomFetch(`/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc`);
    
    if (isLoading) {
        return <div>
            <h1 style={{color: 'white'}}>loading...</h1>
        </div>;
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

export default Popular;