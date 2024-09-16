import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./placeSlice"

// Aqui dentro podremos poner todos los reducers que queramos
export const store = configureStore({
  reducer: {
    place: placeReducer,
  }
})