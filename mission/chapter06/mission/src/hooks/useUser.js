import { useState, useEffect } from 'react';
import axios from 'axios';

const useUser = () => {
    const [nickname, setNickname] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                setNickname(null);
                return;
            }
            const response = await axios.get('http://localhost:3000/user/me', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const email = response.data.email;
            const nickname = email.split('@')[0];
            setNickname(nickname);
        } catch (error) {
            console.error('유저 정보 불러오기 실패:', error);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setNickname(null);
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setNickname(null);
    };
    
    // accessToken이 변경될 때마다 유저 정보 갱신
    useEffect(() => {
        const tokenObserver = setInterval(() => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken && !nickname) {
                fetchUserInfo();
            } else if (!accessToken && nickname) {
                setNickname(null);
            }
        }, 1000);

        return () => clearInterval(tokenObserver);
    }, [nickname]);


    return { nickname, fetchUserInfo, logout };
};

export default useUser;
