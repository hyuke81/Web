import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: #101010;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BrandButton = styled.button`
    background: none;
    border: none;
    color: #FF0558;
    font-size: 1.5em;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Nickname = styled.span`
    background: none;
    border: none;
    font-size: 1em;
    color: white;
    margin-right: 20px;
`;

export const LogoutButton = styled.button`
    background: none;
    border: none;
    font-size: 1em;
    color: white;
    margin-right: 20px;
`;

export const LoginButton = styled.button`
    background: none;
    border: none;
    font-size: 1em;
    color: #b0b5c1;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        color: white;
    }
`;

export const SignupButton = styled.button`
    background-color: #FF0558;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;

    &:hover {
        background-color: black;
    }
`;
