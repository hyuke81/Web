import Navbar from './components/navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import * as S from './styles/layout.style.jsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <S.Container>
            <Navbar />
            <S.Main>
                <Sidebar />
                <S.Content>
                    <Outlet />
                </S.Content>
            </S.Main>
        </S.Container>
    );
};

export default RootLayout;
