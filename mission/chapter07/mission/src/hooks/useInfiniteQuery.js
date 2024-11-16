import { useInfiniteQuery } from 'react-query';
import { axiosInstance } from '../apis/axios-instance.js';

const useCustomInfiniteFetch = (url = 'page') => {
    return useInfiniteQuery(
        url, // 쿼리 키
        async ({ pageParam = 1 }) => {
            console.log(`Fetching data from: ${url} (page: ${pageParam})`);
            const response = await axiosInstance.get(`${url}&page=${pageParam}`);
            console.log('API Response:', response);

            return response.data;
        },
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.page < lastPage.total_pages) {
                    return lastPage.page + 1;
                }
                return undefined; // 마지막 페이지일 경우
            },
            refetchOnWindowFocus: false, // 창으로 돌아왔을 때 자동 재요청 방지
        }
    );
};

export default useCustomInfiniteFetch;
