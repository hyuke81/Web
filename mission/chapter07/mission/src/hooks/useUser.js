import { useQuery, useMutation, useQueryClient } from 'react-query';
import {axiosInstance} from '../apis/axios-instance.js';

const fetchUserInfo = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) throw new Error('No access token found');

    const response = await axiosInstance.get('http://localhost:3000/user/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const email = response.data.email;
    return email.split('@')[0]; // 닉네임 반환
};

const useUser = () => {
    const queryClient = useQueryClient();

    // 유저 정보를 가져오는 쿼리
    const { data: nickname, error, isLoading, isError } = useQuery(
        'userInfo',
        fetchUserInfo,
        {
            enabled: !!localStorage.getItem('accessToken'), // accessToken이 존재할 때만
            retry: 1, // 실패 시 한 번만 재시도
            onError: () => {
                // 에러 발생 시 토큰 제거
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            },
        }
    );

    // 로그아웃을 처리
    const logoutMutation = useMutation(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        queryClient.invalidateQueries('userInfo'); // 캐시 무효
    });

    // 로그아웃 함수
    const logout = () => {
        logoutMutation.mutate();
    };

    return {
        nickname,
        isLoading,
        isError,
        error,
        logout,
    };
};

export default useUser;
