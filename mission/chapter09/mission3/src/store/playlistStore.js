import { create } from 'zustand';
import cartItems from '../constants/cartItems';

const usePlaylistStore = create((set, get) => ({
    // 초기 상태
    playlist: cartItems.map((item) => ({ ...item, amount: 1 })), // 초기수량은 1로
    totalAmount: 0,
    totalPrice: 0,

    // 수량 증가
    increaseAmount: (id) => {
        set((state) => ({
        playlist: state.playlist.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item),
        }));
        get().calculateTotals();
    },

    // 수량 감소
    decreaseAmount: (id) => {
        set((state) => ({
        playlist: state.playlist
            .map((item) => item.id === id ? { ...item, amount: item.amount - 1 } : item)
            .filter((item) => item.amount > 0), // 수량이 0까지만
        }));
        get().calculateTotals();
    },

    //삭제
    removeItem: (id) => {
        set((state) => ({
        playlist: state.playlist.filter((item) => item.id !== id),
        }));
        get().calculateTotals();
    },

    // 전체 초기화
    clearPlaylist: () => {
        set(() => ({ playlist: [], totalAmount: 0, totalPrice: 0 }));
    },

    // 총 수량 및 금액 계산
    calculateTotals: () => {
        const currentPlaylist = get().playlist;
        const totalAmount = currentPlaylist.reduce((sum, item) => sum + item.amount, 0);
        const totalPrice = currentPlaylist.reduce(
        (sum, item) => sum + item.price * item.amount,0 );

        set({ totalAmount, totalPrice });
    },
}));

export default usePlaylistStore;
