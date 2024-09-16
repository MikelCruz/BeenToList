import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlace } from "../redux/placeSlice";
import { IoChevronBackCircleOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
export const BeenAddItem = ({ goBack }) => { 
  
  const dispatch = useDispatch();

  const [showMessage, setShowMessage] = useState(false);

  const [formData, setFormData] = useState({
    name:     '',
    city:     '',
    country:  '',
    latitude: '',
    longitude: '',
    visited: false
  });

  // Actualizo los datos de los inputs al momento de escribir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Funcion para guardar datos en el estado
  const handleSubmit = (e) => {
    e.preventDefault();

    // Despacho la accion AddPlace para almacenar los datos en el estado global
    dispatch(addPlace(formData))

    // Limpiamos el formulario tras el despacho
    setFormData({
      name:     '',
      city:     '',
      country:  '',
      latitude: '',
      longitude: '',
      visited: false
    });

    // Mensaje de confirmación
    setShowMessage(true);

    // Ocultamos el mensaje después de 3 segundos
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleGoBack = () => {
    goBack();
  };

  return (
    <div>
      <h2>Añade el lugar deseado</h2>
      
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />

      <form onSubmit={handleSubmit} className="formWrapper">
        <div>
          <label>Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="latitude">Latitud:</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="longitude">Altitud:</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>
        
        <button className="btn-send-form-data" type="submit">Enviar</button>
        
        {showMessage && <p className="confirmation-message">Lugar añadido con éxito!</p>}
      </form>
    </div>
  );
}
