import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { calculateTotals } from './redux/cartSlice';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import Styles from './styles/Styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <>
      <Styles />
      <Header />
      <CartContainer />
    </>
  );
};

export default App;
