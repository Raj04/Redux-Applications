import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "./Reducer";

export default configureStore({
  reducer: { counter: CountReducer },
});
