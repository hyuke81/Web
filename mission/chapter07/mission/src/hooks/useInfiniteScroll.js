import { useEffect, useRef } from 'react';

const useInfiniteScroll = (onIntersect, hasMore, isLoading) => {
    const observerRef = useRef(null);

    useEffect(() => {
        if (!observerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {  //화면이 나타났능가?
                    onIntersect(); 
                }
            },
            { threshold: 1.0 }  //요소가 화면 들어왔을 때
        );

        const target = observerRef.current;
        observer.observe(target); //감시 대상 설정 

        return () => {
            if (target) observer.unobserve(target); //감시 해제 
        };
    }, [onIntersect, hasMore, isLoading]);

    return observerRef;
};

export default useInfiniteScroll;
