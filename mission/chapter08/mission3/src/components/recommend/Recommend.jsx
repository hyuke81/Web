import './Recommend.css';
import { useState, useEffect } from 'react';
import useCustomFetch from '../../hooks/useCustomQuery.js';
import Card from '../card/Card.jsx';
import SkeletonCard from '../skeleton/SkeletonCard.jsx';
import * as S from '../moviepage_main/Movies.style.jsx';

const Recommend = () => {
    const categories = ['#미국', '#일본', '#영국'];
    const countryCodes = ['US', 'JP', 'GB'];
    const [activeIndex, setActiveIndex] = useState(0);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const selectedCountryCode = countryCodes[activeIndex];

    // 모든 영화를 가져오는 API
    const { data: movies, isLoading, isError } = useCustomFetch(
        '/discover/movie?language=ko-KR&sort_by=popularity.desc'
    );

    useEffect(() => {
        if (movies) {
            const fetchMovieDetails = async () => {
                const filtered = [];
                for (const movie of movies) {
                    const response = await fetch(
                        `https://api.themoviedb.org/3/movie/${movie.id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
                            },
                        }
                    );
                    const movieDetails = await response.json();
                    if (movieDetails.production_countries.some((country) => country.iso_3166_1 === selectedCountryCode)) {
                        filtered.push(movie);
                    }
                }
                setFilteredMovies(filtered);
            };

            fetchMovieDetails();
        }
    }, [movies, selectedCountryCode]);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

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
        return (
            <div>
                <h1 style={{ color: 'white' }}>
                    데이터를 불러오는 중 문제가 발생했습니다.
                </h1>
            </div>
        );
    }

    return (
        <div>
            <div className="recommend-container">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`recommend-button ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <S.CardList>
                {filteredMovies.map((movie) => (
                    <Card key={movie.id} movie={movie} handleClicked={() => {}} />
                ))}
            </S.CardList>
        </div>
    );
};

export default Recommend;
