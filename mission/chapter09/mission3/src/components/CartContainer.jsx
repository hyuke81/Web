import CartItem from './CartItem';
import usePlaylistStore from '../store/playlistStore';
import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
    padding: 20px;
`;

const Total = styled.div`
    margin-top: 30px;
    text-align: center;
`;
const StyledButton = styled.button`
    margin-top: 20px;
    background-color: #6c63ff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
`;

const CartContainer = () => {

    const {
        playlist,
        totalPrice,
        clearPlaylist,
        calculateTotals,
    } = usePlaylistStore();
    
    useEffect(() => {
        calculateTotals();
    }, [playlist]);
    
    if (playlist.length === 0) {
        return <Container>장바구니가  텅 ~ 비어 있네요.</Container>;
    }

    return (
        <Container>
            {playlist.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <Total>
                <h4>총 가격: ₩ {totalPrice}</h4>
                <StyledButton onClick={clearPlaylist}>
                    장바구니 초기화
                </StyledButton>

            </Total>
        </Container>
    );
};

export default CartContainer;
