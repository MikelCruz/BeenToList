import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { editPlace, deletePlace } from "../redux/placeSlice";

// eslint-disable-next-line react/prop-types
export const BeenList = ({ goBack }) => {
  
  const places = useSelector((state) => state.place.places);
  const dispatch = useDispatch();
  
  const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    latitude: '',
    altitude: '',
    visited: false
  });

  const handleGoBack = () => {
    goBack();
  };

  // Seleccionamos el objeto a cambiar exacto
  const handleEditClick = (index) => {
    setSelectedPlaceIndex(index);
    setFormData(places[index]);
  };

  // Gestionamos el cambio
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Guardamos los cambios
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPlace({ index: selectedPlaceIndex, ...formData }));
    setSelectedPlaceIndex(null);
  };

  return (
    <main>
      <h1> Lista de Lugares </h1>
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />
  
      <div className="places-list">
        
        {places.length <= 0 && <h2> ¡Aun no has visitado ningún lugar! </h2>}
        
        {places.map((place, index) => (
          <div key={index} className="place-item">
            
            <div className="place-detail">Lugar: {place.name}</div>
            <div className="place-detail">Ciudad: {place.city}</div>
            <div className="place-detail">Pais: {place.country}</div>
            <div className="place-detail">Coordenadas: {place.latitude}, {place.altitude}</div>
            <div className="place-detail">Visitado: {place.visited ? 'visitado' : 'No visitado'}</div>
            
            <button onClick={() => dispatch(deletePlace(index))}>Delete</button>
            <button onClick={() => handleEditClick(index)}>Editar</button>
            
            <button onClick={() => window.open(`https://www.google.com/maps?q=${place.latitude},${place.longitude}`, '_blank')}>
              Ver en Mapa
            </button>
            
            {selectedPlaceIndex === index && (
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
                  <input type="number" name="latitude" value={formData.latitude} onChange={handleChange} required/>
                </div>

                <div>
                  <label>Altitud</label>
                  <input type="number" name="altitude" value={formData.altitude} onChange={handleChange} required/>
                </div>

                <div>
                  <label>Visitado</label>
                  <input
                    type="checkbox"
                    name="visited"
                    checked={formData.visited}
                    onChange={(e) => setFormData((prevData) => ({
                      ...prevData,
                      visited: e.target.checked
                    }))}
                  />
                </div>
                <button type="submit">Actualizar</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
