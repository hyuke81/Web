import Card from '../../card/Card.jsx';
import SkeletonCard from '../../skeleton/SkeletonCard.jsx';
import * as S from '../../moviepage_main/movies.style.jsx';
import useCustomInfiniteFetch from '../../../hooks/useInfiniteQuery.js';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll.js';
import { Oval } from "react-loader-spinner"; // react-loader-spinner 라이브러리 사용

const NowPlaying = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
    } = useCustomInfiniteFetch(
        '/discover/movie?include_adult=false&include_video=false&language=ko-KR&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'
    );

    const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage, isFetchingNextPage);

    if (isLoading) {
        return (
            <div className="LoadingContainer">
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
                <S.CardList>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </S.CardList>
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                <h1 style={{ color: 'white' }}>데이터를 불러오는 중 오류가 발생했습니다.</h1>
            </div>
        );
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

export default NowPlaying;
