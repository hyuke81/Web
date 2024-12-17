import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increase, decrease, calculateTotals } from '../redux/cartSlice.js';
import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-bottom: 1px solid lightgray;
`;

const Image = styled.img`
    width: 80px;
    height: auto;
    margin-right: 20px;
`;

const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h5 {
        margin: 5px 0;
    }
`;

const CountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        border: 2px solid gray;
        border-radius: 5px;
        padding: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

    const CartItem = ({ id, title, singer, price, img, amount }) => {
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase(id));
        dispatch(calculateTotals());
    };

    const handleDecrease = () => {
        dispatch(decrease(id));
        dispatch(calculateTotals());
    };

    return (
        <ItemContainer>
        <Image src={img} alt={title} />

        <Info>
            <h4>
            {title} | {singer}
            </h4>
            <h5>₩ {price}</h5>
        </Info>

        <CountContainer>
            <button onClick={handleIncrease}>
            </button>
            <p>{amount}</p>
            <button onClick={handleDecrease}>
            </button>
        </CountContainer>
        </ItemContainer>
    );
    };

    // PropTypes를 사용해 props 검증
    CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default CartItem;
