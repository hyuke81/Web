import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    h2 {
        color: white;
        margin-bottom: 10px;
        font-size: 20px;
    }
`;

export const CategoryList = styled.div`
    display: flex;
    gap: 30px; 
`;

export const CategoryBox = styled.div`
    width: 250px;
    height: 150px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    position: relative;
`;

export const CategoryTitle = styled.div`
    position: absolute;
    bottom: 7px;
    left: 7px;
    width: cover;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-weight: bold;
    font-size: 15px;
    border-radius: 10px;
`;
