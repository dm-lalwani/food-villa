import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    /**
     * Vanila(old) Redux => Don't mutate the state
     * const newState = [...state];
     * newState.items.push(action.payload);
     * return newState;
     */

    // mutating the state
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //RTK - either Mutate the existing state or return a new State
      // state.items.length = 0; // originalState = { items: [] }
      // console.log(current(state));
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
