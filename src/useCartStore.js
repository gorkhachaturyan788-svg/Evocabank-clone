import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      toggleCartItem: (item) =>
        set((state) => {
          const exists = state.cartItems.some((i) => i.id === item.id);
          return {
            cartItems: exists
              ? state.cartItems.filter((i) => i.id !== item.id)
              : [...state.cartItems, item],
          };
        }),
    }),
    {
      name: 'cart-storage-v3',
    }
  )
);