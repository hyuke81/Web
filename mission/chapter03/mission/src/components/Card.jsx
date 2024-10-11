import PropTypes from 'prop-types';

const Card = ({ movie,handleClicked }) => {
    console.log(movie);

    return (
        <div
            key={movie.id}
            style={{
                position: 'relative',
                width: '150px',
                marginBottom: '20px',
                cursor: 'pointer',
                textAlign: 'center',
                color: 'black'
            }}
            onClick={() => handleClicked(movie.id)}
        >
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '5%',
                }}
            />

            <div style={{ marginTop: '5px', color: 'white' }}>
                <h4 style={{ fontSize: '12px', margin: '2px 0' }}>{movie.title}</h4>
                <p style={{ fontSize: '11px', margin: '0px' }}>
                    {new Date(movie.release_date).toLocaleDateString('ko-KR')}
                </p>
            </div>
        </div>
    );
};

Card.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.string,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
    clickedMovie: PropTypes.number,
    handleClicked: PropTypes.func.isRequired,
};

export default Card;
