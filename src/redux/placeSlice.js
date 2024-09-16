import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 places: [] // Array de objetos
}

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    // Accion de añadir lugar
    addPlace: (state, action) => {

      // el payload de la accion que despacharemos en un componente de React
      const { name, city, country, latitude, altitude, visited } = action.payload; 
      
      state.places.push({
        name,
        city,
        country,
        latitude,
        altitude,
        visited: visited ?? false // Por defecto, `visited` es false si no se proporciona
      });


    },

    // Accion de cambiar datos del lugar --> Actualizamos todos los datos aun que solo cambie uno
    editPlace: (state, action) => {

      const { index, name, city, country, latitude, altitude, visited } = action.payload;
      if (state.places[index]) {
        state.places[index] = {
          name,
          city,
          country,
          latitude,
          altitude,
          visited: visited ?? state.places[index].visited // Mantiene el valor anterior (False) sino se pasa visited en el payload
        };
      }
    },

     // Acción para eliminar un lugar
     deletePlace: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.places.length) {
        state.places.splice(index, 1); // Elimina el lugar en la posición `index`
      }
    }

  }
})

export const { addPlace, editPlace, deletePlace } = placeSlice.actions
export default placeSlice.reducer