// MovieIdPage.jsx
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from "../hooks/useCustomFetch.js";

const MovieDetailContainer = styled.div`
    color: white;
    padding: 20px;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-image: url(${props => props.backdrop});
    background-size: cover;
    background-position: center;
    padding: 40px;
    border-radius: 10px;
    filter: brightness(80%);
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const MovieTitle = styled.h1`
    font-size: 36px;
    margin: 0;
`;

const MovieDetails = styled.p`
    margin: 5px 0;
    font-size: 16px;
`;

const MovieOverview = styled.p`
    margin-top: 15px;
    line-height: 1.5;
`;

const CastContainer = styled.div`
    margin-top: 40px;
`;

const CastTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

const CastItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
`;

const CastImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const CastName = styled.p`
    font-size: 14px;
    margin: 0;
    text-align: center;
`;

const CastCharacter = styled.p`
    font-size: 12px;
    color: #aaa;
    margin: 0;
    text-align: center;
`;

const MovieIdPage = () => {
    const { movieId } = useParams();
    console.log('Movie Id:', movieId);
    const { data: movie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    console.log('Movie data:', movie);
    const { data: movie_credits, isLoading_credits, isError_credits } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
    console.log('Movie credits:', movie_credits);

    if (isLoading || isLoading_credits) {
        return <div><h1 style={{color: 'white'}}>loading...</h1></div>;
    }

    if (isError || isError_credits) {
        return <div><h1 style={{color: 'white'}}>Error...</h1></div>;
    }

    if (!movie || Object.keys(movie).length === 0) {
        return <div><h1 style={{ color: 'white' }}>No movie data found</h1></div>;
    }

    return (
        <MovieDetailContainer>
            <HeaderContainer backdrop={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                <MovieInfo>
                    <MovieTitle>{movie.title || movie.original_title}</MovieTitle>
                    <MovieDetails>⭐{movie.vote_average}</MovieDetails>
                    <MovieDetails>{new Date(movie.release_date).getFullYear()}</MovieDetails>
                    <MovieDetails>상영 시간: {movie.runtime}분</MovieDetails>
                    <MovieOverview>{movie.overview}</MovieOverview>
                </MovieInfo>
            </HeaderContainer>

            <CastContainer>
                <CastTitle>감독/출연</CastTitle>
                {movie_credits && movie_credits.cast ? (
                    <CastList>
                        {movie_credits.cast.slice(0, 12).map((castMember) => (
                            <CastItem key={castMember.id}>
                                <CastImage 
                                    src={
                                        castMember.profile_path 
                                        ? `https://image.tmdb.org/t/p/w200${castMember.profile_path}` 
                                        : 'https://via.placeholder.com/100'
                                    } 
                                    alt={castMember.name}
                                />
                                <CastName>{castMember.name}</CastName>
                                <CastCharacter>({castMember.character})</CastCharacter>
                            </CastItem>
                        ))}
                    </CastList>
                ) : (
                    <p>출연진 정보가 없습니다.</p>
                )}
            </CastContainer>

        </MovieDetailContainer>
    );
};

export default MovieIdPage;
