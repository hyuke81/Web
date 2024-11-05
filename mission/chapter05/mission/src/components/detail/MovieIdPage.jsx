import { useParams } from 'react-router-dom';
import useCustomFetch from "../../hooks/useCustomFetch.js";
import './MovieIdPage.css';

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
        <div className="MovieDetailContainer">
            <div className="HeaderContainer" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                <div className="MovieInfo">
                    <h1 className="MovieTitle">{movie.title || movie.original_title}</h1>
                    <p className="MovieDetails">⭐{movie.vote_average}</p>
                    <p className="MovieDetails">{new Date(movie.release_date).getFullYear()}</p>
                    <p className="MovieDetails">{movie.runtime}분</p>
                    <p className="MovieOverview">{movie.overview}</p>
                </div>
            </div>

            <div className="CastContainer">
                <h2 className="CastTitle">감독/출연</h2>
                {movie_credits && movie_credits.cast ? (
                    <div className="CastList">
                    {movie_credits.cast.slice(0, 12).map((castMember) => (
                        <div className="CastItem" key={castMember.id}>
                            {castMember.profile_path ? (
                                <img 
                                    className="CastImage"
                                    src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                                    alt={castMember.name}
                                />
                            ) : (
                                <div className="NoneCastPlace" />
                            )}
                            <p className="CastName">{castMember.name}</p>
                            <p className="CastCharacter">({castMember.character})</p>
                        </div>
                    ))}
                </div>
                ) : (
                    <p>출연진 정보가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default MovieIdPage;
