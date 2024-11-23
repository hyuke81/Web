import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ movie, handleClicked }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        handleClicked(movie.id);
        navigate(`/movies/${movie.id}`);
    };

    return (
        <div className="CardContainer" onClick={handleCardClick}>
            <img
                className="CardImage"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="CardContent">
                <h4 className="Title">{movie.title}</h4>
                <p className="ReleaseDate">{new Date(movie.release_date).toLocaleDateString('ko-KR')}</p>
            </div>
        </div>
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
