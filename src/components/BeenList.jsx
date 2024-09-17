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
    longitude: '',
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

  // Mostramos el mapa con las cordenadas
  const showInGoogleMaps = (latitude, longitude) => {
    window.open( `https://www.google.com/maps?q=${latitude},${longitude}`,"_blank")
  }

  return (
    <main>
      <h2> Lista de Lugares </h2>
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />
  
      <div className="places-list">
        {places.length === 0 && <h2>¡Aun no has visitado ningún lugar!</h2>}
  
        {places.map((place, index) => (
          <div key={index} className="place-item">
            <div className="place-detail">
              <span>Lugar:</span> <span>{place.name}</span>
            </div>
  
            <div className="place-detail">
              <span>Ciudad:</span> <span>{place.city}</span>
            </div>
  
            <div className="place-detail">
              <span>País:</span> <span>{place.country}</span>
            </div>
  
            <div className="place-detail">
              <span>Coordenadas:</span> <span>{place.latitude}, {place.longitude}</span>
            </div>
  
            <div className="place-detail">
              <span>Visitado:</span> <span>{place.visited ? 'Visitado' : 'No visitado'}</span>
            </div>
  
            <div className="place-actions">
              <button onClick={() => dispatch(deletePlace(index))}>Eliminar</button>
              <button onClick={() => handleEditClick(index)}>Editar</button>
            </div>
  
            <button className="place-map-button" onClick={() => showInGoogleMaps(place.latitude, place.longitude)}>
              Ver en Mapa
            </button>
  
            {/* Solo se muestra el formulario de edición para el lugar seleccionado */}
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
                  <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required/>
                </div>

                <div>
                  <label>Longitud</label>
                  <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required/>
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
