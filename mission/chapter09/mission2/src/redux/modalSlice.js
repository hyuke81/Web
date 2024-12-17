import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false, // 초기 모달 닫힘
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
        state.isOpen = true; // 모달 열기
        },
        closeModal: (state) => {
        state.isOpen = false; // 모달 닫기
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
