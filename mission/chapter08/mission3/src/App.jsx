import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout.jsx'; 
import MoviesPage from './components/moviepage_main/MoviesPage.jsx';
import LoginPage from './components/login/LoginPage.jsx';
import SignupPage from './components/signup/SignupPage.jsx';
import SearchPage from './components/search/SearchPage.jsx';
import Cartegorypage from './components/category/categorypage.jsx';
import NowPlaying from './components/category/category_detail/nowplaying.jsx';
import Popular from './components/category/category_detail/popular.jsx';
import TopRated from './components/category/category_detail/toprated.jsx';
import UpComing from './components/category/category_detail/upcoming.jsx';
import MovieIdPage from './components/detail/MovieIdPage.jsx';
import Recommend from './components/recommend/Recommend.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/category" element={<Cartegorypage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/up-coming" element={<UpComing />} />
          <Route path="/movies/:movieId" element={<MovieIdPage />} />
          <Route path="/recommend" element={<Recommend />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
