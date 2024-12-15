import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// redux store 생성
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
