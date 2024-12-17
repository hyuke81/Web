import { useSelector } from 'react-redux';
import { CartIcon} from '../constants/icons.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #6c63ff;
    color: white;
    `;

    const Header = () => {
    const { amount } = useSelector((state) => state.cart);

    return (
        <HeaderContainer>
        <h1>UMC PlayList</h1>
        <div>
            <CartIcon />
            <span>{amount}</span>
        </div>
        </HeaderContainer>
    );
};

export default Header;
