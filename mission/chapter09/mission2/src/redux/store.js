import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import modalReducer from './modalSlice.js';

// redux store 생성
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});
