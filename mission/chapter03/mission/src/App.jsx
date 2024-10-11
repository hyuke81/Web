import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './rootlayout.jsx'; 
import MoviesPage from './components/MoviesPage.jsx';
import LoginPage from './components/loginpage.jsx';
import SignupPage from './components/signuppage.jsx';
import SearchPage from './components/searchpage.jsx';
import Cartegorypage from './components/categorypage.jsx';
import NowPlaying from './components/category/nowplaying.jsx';
import Popular from './components/category/popular.jsx';
import TopRated from './components/category/toprated.jsx';
import UpComing from './components/category/upcoming.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/category" element={<Cartegorypage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/up-coming" element={<UpComing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
