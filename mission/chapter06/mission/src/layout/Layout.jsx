import Navbar from './navbar/navbar.jsx';
import Sidebar from './sidebar/sidebar.jsx';
import * as S from './layout.style.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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

export default Layout;
