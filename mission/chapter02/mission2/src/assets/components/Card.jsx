import PropTypes from 'prop-types';

const Card = ({ movie, clickedMovie, handleClicked }) => {
    return (
    <div
        key={movie.id}
        style={{
        position: 'relative',
        width: '100px',
        height: '150px',
    }}
        onClick={() => handleClicked(movie.id)}
    >
    <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        style={{
            width: '100%',
            height: '100%',
            borderRadius: '5%',
        }}
    />
    <div
        style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '5%',
            backgroundColor: 'black',
            opacity: clickedMovie === movie.id ? 0.5 : 0,
        }}
    ></div>
    </div>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    clickedMovie: PropTypes.number,
    handleClicked: PropTypes.func.isRequired,
};


export default Card;
