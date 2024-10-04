import './App.css';
import { MOVIES } from './mocks/movies'; 

const App = () => {
  return (
    <div className="grid">
      {MOVIES.results.slice(0, 20).map((movie) => (
        <div key={movie.id} className="photo">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            className="movie_card"
          />
          <div className="blackbox"></div>
        </div>
      ))}
    </div>
  );
};

export default App;
