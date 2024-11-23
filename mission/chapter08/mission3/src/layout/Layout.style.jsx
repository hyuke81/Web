import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: black;
`;

export const Main = styled.div`
    display: flex;
    flex: 1; 
    overflow: hidden;
`;

export const Sidebar = styled.div`
    width: 250px;
    background-color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`;
