import { useQuery } from 'react-query';
import { axiosInstance } from '../apis/axios-instance.js';

const useCustomQuery = (url) => {
    return useQuery(
        url, // 쿼리 키
        async () => {
            console.log('데이터 요청', url);
            const response = await axiosInstance.get(url);
            console.log('전체 API 응답:', response);

            if (response.data.results) {
                return response.data.results;
            } else {
                return response.data;
            }
        },
        {
            refetchOnWindowFocus: false, // 창으로 돌아왔을 때 자동 재요청 방지
        }
    );
};

export default useCustomQuery;
