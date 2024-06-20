import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const card = cardSlice.reducer;
export const { addItems, removeItems, clearItems } = cardSlice.actions;
