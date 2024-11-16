import Card from "../../card/Card.jsx";
import * as S from '../../moviepage_main/movies.style.jsx';
import useCustomQuery from "../../../hooks/useCustomQuery.js";
import SkeletonCard from '../../skeleton/SkeletonCard.jsx';

const Toprated = () => {
    const { data: movies, isLoading, isError } = useCustomQuery(
        `/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`);
    
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
                    handleClicked={() => {}} 
                />
            ))}
        </S.CardList>
    );
};

export default Toprated;