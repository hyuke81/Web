import styled from 'styled-components';

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2px;
    padding: 5px;
    justify-items: center;
`;
