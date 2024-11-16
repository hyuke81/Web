import Card from "../../card/Card.jsx";
import * as S from '../../moviepage_main/movies.style.jsx';
import SkeletonCard from '../../skeleton/SkeletonCard.jsx';
import useCustomInfiniteFetch from '../../../hooks/useInfiniteQuery.js';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll.js';
import { Oval } from "react-loader-spinner"; // react-loader-spinner 라이브러리 사용

const Toprated = () => {
    const { 
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError 
    } = useCustomInfiniteFetch(
        `/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`);
    
    const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage, isFetchingNextPage);

    if (isLoading) {
        return (
            <div className="LoadingContainer">
                <S.CardList>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </S.CardList>
                <Oval
                    visible={true}
                    height={100}
                    width={100}
                    color="#FF0558"
                    ariaLabel="oval-loading"
                    secondaryColor="#FFFFFF"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
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
                {data?.pages.map((page) =>
                    page.results.map((movie) => (
                        <Card
                            key={movie.id}
                            movie={movie}
                            handleClicked={() => {}}
                        />
                    ))
                )}
                {isFetchingNextPage &&
                    Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonCard key={`skeleton-${index}`} />
                    ))}
            </S.CardList>
            <div ref={observerRef} style={{ height: '1px' }}></div>
        </div>
    );
};

export default Toprated;