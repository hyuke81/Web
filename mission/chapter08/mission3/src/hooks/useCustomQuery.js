import { useQuery } from 'react-query';
import { axiosInstance } from '../apis/axios-instance.js';

const useCustomQuery = (url) => {
    return useQuery(
        url,
        async () => {
            const response = await axiosInstance.get(url);
            // TMDB API의 데이터를 변환해서 반환
            return response.data.results || response.data; 
        },
        {
            refetchOnWindowFocus: false, // 창 전환 시 자동 재요청 방지
        }
    );
};

export default useCustomQuery;
