import { useState } from "react";
import Card from "../card/Card.jsx";
import * as S from './Movies.style.jsx';
import usePaginated from '../../hooks/usePaginated.js';
import SkeletonCard from '../skeleton/SkeletonCard.jsx';
import './MoviePage.css';

const MoviesPage = () => {
    const [page, setPage] = useState(1); // 현재 페이지 관리
    const { data, isLoading, isError } = usePaginated(
        '/movie/popular?language=ko-KR', page
    );

    const handleNextPage = () => {
        if (data && data.page < data.total_pages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
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
        return <div>
            <h1 style={{color: 'white'}}>Error...</h1>
        </div>;
    }

    return (
        <div>
            <S.CardList>
                {data?.results.map((movie) => (
                    <Card
                        key={movie.id}
                        movie={movie}
                        handleClicked={() => {}}
                    />
                ))}
            </S.CardList>
            <div className="control">
                <button
                    className={`btn prev-btn ${
                        page === 1 ? 'disabled' : ''
                    }`}
                    onClick={handlePrevPage}
                    disabled={page === 1}
                >
                    이전 페이지
                </button>
                <span className="page">
                    {page} 페이지
                </span>
                <button
                    className={`btn next-btn ${
                        data?.page === data?.total_pages ? 'disabled' : ''
                    }`}
                    onClick={handleNextPage}
                    disabled={data?.page === data?.total_pages}
                >
                    다음 페이지
                </button>
            </div>
        </div>
    );
};

export default MoviesPage;