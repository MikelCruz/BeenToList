import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:     "",
  city:     "",
  country:  "",
  latitude: "",
  altitude: "",
}

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    // Accion de añadir lugar
    addPlace: (state, action) => {

      // el payload de la accion que despacharemos en un componente de React
      const { name, city, country, latitude, altitude } = action.payload; 
      state.name      = name
      state.city      = city
      state.country   = country
      state.latitude  = latitude
      state.altitude  = altitude

    },

    // Accion de cambiar datos del lugar --> Actualizamos todos los datos aun que solo cambie uno
    changePlace: (state, action) => {

      const { name, city, country, latitude, altitude } = action.payload; 
      state.name      = name
      state.city      = city
      state.country   = country
      state.latitude  = latitude
      state.altitude  = altitude

    },
  }
})

export const { addPlace, changePlace } = placeSlice.actions
export default placeSlice.reducer