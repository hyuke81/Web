import { useQuery } from 'react-query';
import { axiosInstance } from '../apis/axios-instance.js';

const usePaginated = (url, page) => {
    return useQuery(
        ['paginatedMovies', page], // 쿼리 키에 페이지 추가
        async () => {
            console.log(`현재 페이지 ${page}`);
            const response = await axiosInstance.get(`${url}&page=${page}`);
            return response.data;
        },
        {
            keepPreviousData: true, // 이전 페이지 화면 유지
            refetchOnWindowFocus: true, // 새로고침시 처음 페이지로 이동
        }
    );
};

export default usePaginated;
