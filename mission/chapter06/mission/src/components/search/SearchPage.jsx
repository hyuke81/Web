import './SearchPage.css';
import { useState } from 'react';
import Card from '../card/Card.jsx';
import useCustomFetch from '../../hooks/useCustomFetch';
import SkeletonCard from '../skeleton/SkeletonCard.jsx';

const SearchPage = () => {
    //검색어 저장
    const [searchText, setSearchText] = useState('');
    //실제 데이터 요청 URL 저장
    const [searchUrl, setSearchUrl] = useState(null);
    //데이터 요청
    const { data: movies, isLoading, isError } = useCustomFetch(searchUrl);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchClick = () => {
        if (searchText) {
            setSearchUrl(`/search/movie?query=${searchText}&language=ko-KR`);
        }
    };

    return (
        <div className="search_page">
            <div className="search_container">
                <input
                    type="text"
                    placeholder="영화 제목을 입력해주세요..."
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <button onClick={handleSearchClick}>검색</button>
            </div>
            <div className="results_container">
                {isLoading && (
                        <div className="movies_grid">
                            {/* 로딩 중일 때 SkeletonCard를 여러 개 표시 */}
                            {[...Array(8)].map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                )}

                {isError && <h1 className="errortext">Error...</h1>}

                {/* 검색 결과가 있을 때 */}
                {movies && movies.length > 0 && (
                    <div className="movies_grid">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} handleClicked={() => {}} />
                        ))}
                    </div>
                )}
                {/* 검색 결과가 없을 때 */}
                {movies && movies.length === 0 && !isLoading && (
                    <h1 className="noresultstext">
                        해당하는 검색어 <strong>{searchText}</strong>에<br />해당하는 데이터가 없습니다.
                    </h1>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
