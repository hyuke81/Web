import * as S from './navbar.style.jsx';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser.js';

const Navbar = () => {
    const navigate = useNavigate();
    const { nickname, logout } = useUser();

    const handleBrandClick = () => {
        navigate('/');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout(); // 로그아웃 처리
        navigate('/'); // 로그아웃 후 홈으로 이동
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <S.Navbar>
            <S.BrandButton onClick={handleBrandClick}>YONGCHA</S.BrandButton>
            <S.Wrapper>
                {nickname ? (
                    <>
                        <S.Nickname>{nickname}님 반갑습니다.</S.Nickname>
                        <S.LogoutButton onClick={handleLogoutClick}>로그아웃</S.LogoutButton>
                    </>
                ) : (
                    <>
                        <S.LoginButton onClick={handleLoginClick}>로그인</S.LoginButton>
                        <S.SignupButton onClick={handleSignupClick}>회원가입</S.SignupButton>
                    </>
                )}
            </S.Wrapper>
        </S.Navbar>
    );
};

export default Navbar;
