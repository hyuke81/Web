import * as S from '../styles/category.style.jsx';
import { useNavigate } from 'react-router-dom';
import nowPlayingImg from '../img/blue.jpg'
import popularImg from '../img/green.jpg';
import topRatedImg from '../img/purple.jpg';
import upcomingImg from '../img/yellow.jpg';

const categories = [
    { id: 1, title: "현재 상영중인", image: nowPlayingImg, path: "/movies/now-playing" },
    { id: 2, title: "인기있는", image: popularImg, path: "/movies/popular" },
    { id: 3, title: "높은 평가를 받은", image: topRatedImg, path: "/movies/top-rated" },
    { id: 4, title: "개봉 예정중인", image: upcomingImg, path: "/movies/up-coming" }
];

const CategoryPage = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (path) => {
        navigate(path);
    };

    return (
        <S.Container>
            <h2>카테고리</h2>
            <S.CategoryList>
                {categories.map((category) => (
                    <S.CategoryBox
                        key={category.id}
                        image={category.image}
                        onClick={() => handleCategoryClick(category.path)}
                    >
                        <S.CategoryTitle>{category.title}</S.CategoryTitle>
                    </S.CategoryBox>
                ))}
            </S.CategoryList>
        </S.Container>
    );
};

export default CategoryPage;
