import { CartIcon } from '../constants/icons.jsx';
import styled from 'styled-components';
import usePlaylistStore from '../store/playlistStore';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #6c63ff;
    color: white;
    `;

    const Header = () => {
        const { totalAmount } = usePlaylistStore();

    return (
        <HeaderContainer>
        <h1>UMC PlayList</h1>
        <div>
            <CartIcon />
            <span>{totalAmount}</span>
        </div>
        </HeaderContainer>
    );
};

export default Header;
