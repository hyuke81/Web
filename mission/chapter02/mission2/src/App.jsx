import { useState } from 'react';
import { MOVIES } from './mocks/movies';
import Card from './assets/components/Card';

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
        <Card
          key={movie.id}
          movie={movie}
          clickedMovie={clickedMovie}
          handleClicked={handleClicked}
        />
      ))}
    </div>
  );
};

export default App;
