import { configureStore } from "@reduxjs/toolkit";
import { middlewares } from "./middlewares";
import vinSlice from "./Reducer/vinSlice";


export const store = configureStore({
  reducer: vinSlice,
  middleware: [...middlewares],
});
