import * as S from '../styles/sidebar.style.jsx';
import { IoIosSearch } from "react-icons/io";
import { BiSolidMovie } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search'); 
    };

    const handleCategoryClick = () => {
        navigate('/category'); 
    };

    return (
        <S.Sidebar>
            <ul>
                <li onClick={handleSearchClick}>
                    <IoIosSearch />  검색
                </li>
                <li onClick={handleCategoryClick}>
                    <BiSolidMovie />  영화
                </li>
            </ul>
        </S.Sidebar>
    );
};

export default Sidebar;
