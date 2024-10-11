import * as S from '../styles/navbar.style.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate(); 

    const handleBrandClick = () => {
        navigate('/'); 
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <S.Navbar>
            <S.BrandButton onClick={handleBrandClick}>YONGCHA</S.BrandButton>
            <S.Wrapper>
                <S.LoginButton onClick={handleLoginClick}>로그인</S.LoginButton> 
                <S.SignupButton onClick={handleSignupClick}>회원가입</S.SignupButton>
            </S.Wrapper>
        </S.Navbar>
    );
};

export default Navbar;
