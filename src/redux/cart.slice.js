import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    onClearCart: () => {
      return [];
    },
  },
});

// case CLEAR_CART:
// return  state={ items: {}, totalAmount: 0, }
// this is from action

// export const clearCart = () => {
// return {
//   type: CLEAR_CART
// }
// }

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, onClearCart } = cartSlice.actions;
