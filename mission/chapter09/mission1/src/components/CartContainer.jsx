import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import { useState } from 'react';
import styled from 'styled-components';

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

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 999;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid gray;
    padding: 20px;
    z-index: 1000;
    border-radius: 5px;

    h4 {
        margin-bottom: 20px;
    }

    button {
        margin: 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        display: inline-block;
        width: 80px;
        margin-left: 40px;
    }

    .confirm {
        background-color: red;
        color: white;
    }

    .cancel {
        background-color: gray;
        color: white;
    }
`;

const CartContainer = () => {
    const { cartItems, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기
    const openModal = () => setIsModalOpen(true);

    // 모달 닫기
    const closeModal = () => setIsModalOpen(false);

    // 장바구니 초기화
    const handleClearCart = () => {
        dispatch(clearCart());
        closeModal();
    };

    if (cartItems.length === 0) {
        return <Container>장바구니가  텅 ~ 비어 있네요.</Container>;
    }

    return (
        <Container>
        {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
        ))}
        <Total>
            <h4>총 가격: ₩ {total}</h4>
            <StyledButton onClick={openModal}>
                장바구니 초기화
            </StyledButton>

        </Total>

        {/* 모달 */}
        {isModalOpen && (
            <>
                <ModalOverlay onClick={closeModal} />
                    <Modal>
                        <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
                        <button className="confirm" onClick={handleClearCart}>
                            네
                        </button>
                        <button className="cancel" onClick={closeModal}>
                            아니요
                        </button>
                    </Modal>
                </>
            )}
        </Container>
    );
};

export default CartContainer;
