import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems.js';

// 초기 상태 설정
const initialState = {
    cartItems: cartItems,
    total: 0,
    amount: 0,
};

// redux slice 생성
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // 수량 증가
        increase: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        if (item) item.amount += 1;
        },

        // 수량 감소, 1보다 작아지면 장바구니에서 삭제
        decrease: (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        if (item) {
            // 1 감소
            item.amount -= 1;

            // 1보다 작아지면 삭제
            if (item.amount < 1) {
                state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
                }
            }
        },
        
        // 장바구니 비우기
        clearCart: (state) => {
        state.cartItems = [];
        },

        // 전체 수량 + 금액 계산
        calculateTotals: (state) => {
        let total = 0;
        let amount = 0;

        state.cartItems.forEach((item) => {
            total += item.amount * item.price;
            amount += item.amount;
        });

        // 전체 상태 업데이트
        state.total = total;
        state.amount = amount;
        },
    },
});

export const { increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
