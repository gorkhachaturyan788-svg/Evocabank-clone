import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cartItems: [],
  
  // Ավելացնել կամ հեռացնել զամբյուղից (սրտիկին սեղմելիս)
  toggleCartItem: (item) => set((state) => {
    const exists = state.cartItems.some((i) => i.id === item.id);
    if (exists) {
      return { cartItems: state.cartItems.filter((i) => i.id !== item.id) };
    } else {
      return { cartItems: [...state.cartItems, item] };
    }
  }),
}));