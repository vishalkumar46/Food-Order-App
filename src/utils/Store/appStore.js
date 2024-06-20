import { configureStore } from "@reduxjs/toolkit";
import { card } from "./CardSlice";

export const appStore = configureStore({
  reducer: {
    cart: card,
  },
});
