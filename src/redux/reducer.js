import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const isItem = state.cartItems.find((i) => i.id === action.payload.id);
      if (isItem) {
        state.cartItems.forEach((i) => {
          if (i.id === action.payload.id) i.qty += 1;
        });
      } else {
        state.cartItems.push(action.payload);
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item.qty > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === action.payload) i.qty -= 1;
        });
      } else if (item.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },
    calculatePrice: (state) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.qty));
      state.subTotal = sum;
      state.shipping =
        state.cartItems.length !== 0 && (state.subTotal > 1000 ? 0 : 100);
      state.tax = +(state.subTotal * 0.18).toFixed();
      state.total = state.shipping + state.subTotal + state.tax;
    },
  }
);
