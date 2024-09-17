/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { editPlace } from "../redux/placeSlice";

export const BeenForm = ({ formData, setFormData, selectedPlaceIndex, setSelectedPlaceIndex}) => {

  const dispatch = useDispatch();

  // Gestionamos el cambio
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Guardamos los cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPlace({ index: selectedPlaceIndex, ...formData }));
    setSelectedPlaceIndex(null);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div>
        <label>Nombre</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
      </div>

      <div>
        <label>Ciudad</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required/>
      </div>

      <div>
        <label>País</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required/>
      </div>

      <div>
        <label>Latitud</label>
        <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required/>
      </div>

      <div>
        <label>Longitud</label>
        <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required/>
      </div>

      <div>
        <label>¿Visitado?</label>
        <input
          type="checkbox"
          name="visited"
          checked={formData.visited}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Actualizar</button>
    </form>
  );
};
