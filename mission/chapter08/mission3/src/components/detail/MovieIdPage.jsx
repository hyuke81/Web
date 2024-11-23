import { useParams } from 'react-router-dom';
import useCustomFetch from "../../hooks/useCustomQuery.js";
import { useNavigate } from "react-router-dom";
import './MovieIdPage.css';

const MovieIdPage = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    console.log('Movie Id:', movieId);
    
    const { data: movie, isLoading, isError } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
    const { data: movie_credits, isLoading_credits, isError_credits } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
    const { data: movie_reviews, isLoading_reviews, isError_reviews } = useCustomFetch(`/movie/${movieId}/reviews?language=en-US`);
    const { data: similarMovies, isLoading: isLoadingSimilar, isError: isErrorSimilar } = useCustomFetch(`/movie/${movieId}/similar?language=ko-KR`);
    
    console.log('Movie data:', movie);
    console.log('Movie credits:', movie_credits);
    console.log('Movie reviews:', movie_reviews);
    console.log('Similar movies:', similarMovies);

    const handleMovieClick = (movieId) => {
        navigate(`/movies/${movieId}`); // 영화 id로 상세 페이지 이동
    };

    if (isLoading || isLoading_credits || isLoading_reviews|| isLoadingSimilar) {
        return <div><h1 style={{ color: 'white' }}>Loading...</h1></div>;
    }

    if (isError || isError_credits || isError_reviews || isErrorSimilar) {
        return <div><h1 style={{ color: 'white' }}>Error loading data</h1></div>;
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
            <div className="ReviewContainer">
                <h2 className="ReviewTitle">리뷰</h2>
                {movie_reviews?.length > 0 ? ( // .results 없이 직접 접근
                    <div className="ReviewList">
                        {movie_reviews.map((review) => (
                            <div className="ReviewItem" key={review.id}>
                                <h3 className="ReviewAuthor">작성자: {review.author}</h3>
                                <p className="ReviewContent">{review.content}</p>
                                <p className="ReviewDate">
                                    작성일: {new Date(review.created_at).toLocaleDateString('ko-KR')}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="NoReviews">리뷰가 없습니다.</p>
                )}
            </div>
            <div className="SimilarMoviesContainer">
                <h2 className="SimilarMoviesTitle">추천 영화</h2>
                {similarMovies?.length > 0 ? (
                    <div className="SimilarMoviesList">
                        {similarMovies.slice(0, 10).map((movie) => ( // 6개만 보여줌
                            <div
                                className="SimilarMovieItem"
                                key={movie.id}
                                onClick={() => handleMovieClick(movie.id)} // 클릭 시 상세 페이지로 이동
                            >
                                {movie.poster_path ? (
                                    <img
                                        className="SimilarMovieImage"
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                ) : (
                                    <div className="PlaceholderImage">이미지 없음</div>
                                )}
                                <h3 className="SimilarMovieTitle">{movie.title}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="NoSimilarMovies">추천 영화가 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default MovieIdPage;