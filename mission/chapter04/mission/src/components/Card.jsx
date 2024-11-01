// Card.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardContainer = styled.div`
    position: relative;
    width: 150px;
    margin-bottom: 20px;
    cursor: pointer;
    text-align: center;
    color: black;
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 5%;
`;

const CardContent = styled.div`
    margin-top: 5px;
    color: white;
`;

const Title = styled.h4`
    font-size: 12px;
    margin: 2px 0;
`;

const ReleaseDate = styled.p`
    font-size: 11px;
    margin: 0px;
`;

const Card = ({ movie, handleClicked }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        handleClicked(movie.id);
        navigate(`/movies/${movie.id}`);
    };

    return (
        <CardContainer onClick={handleCardClick}>
            <CardImage
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
            />
            <CardContent>
                <Title>{movie.title}</Title>
                <ReleaseDate>{new Date(movie.release_date).toLocaleDateString('ko-KR')}</ReleaseDate>
            </CardContent>
        </CardContainer>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
    handleClicked: PropTypes.func.isRequired,
};

export default Card;
