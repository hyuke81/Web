import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: #1a2c43;
    color: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BrandButton = styled.button`
    background: none;
    border: none;
    color: red;
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
    background-color: red;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9em;

    &:hover {
        background-color: #e73636;
    }
`;
