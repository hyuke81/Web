import styled from 'styled-components';

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2px;
    padding: 5px;
    justify-items: center;
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: black;
    color: white;
`;