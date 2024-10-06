import { useState } from 'react';
import { MOVIES } from './mocks/movies';

const App = () => {
  const [clickedMovie, setClickedMovie] = useState(null);

  const handleClicked = (movieId) => {
    setClickedMovie((getMovieId) => (getMovieId === movieId ? null : movieId));
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        justifyItems: 'center',
        padding: '1px',
        gap: '5px',
      }}
    >
      {MOVIES.results.slice(0, 20).map((movie) => (
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
              opacity: clickedMovie === movie.id ? 0.5 : 0
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default App;
