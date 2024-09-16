import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlace } from "../redux/placeSlice";
import { IoChevronBackCircleOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
export const BeenAddItem = ({ goBack }) => { 

  // const placeData = useSelector((state) => state.place);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name:     '',
    city:     '',
    country:  '',
    latitude: '',
    altitude: '',
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
    
    // Detengo la recarga de la pagina - TEST
    e.preventDefault();

    // Despacho la accion AddPlace para almacenar los datos en el estado global
    dispatch(addPlace(formData))

    // Limpiamos el formulario tras el despacho
    setFormData({
      name:     '',
      city:     '',
      country:  '',
      latitude: '',
      altitude: '',
      visited: false
    });

  };

  const handleGoBack = () => {
    goBack();
  }


  return (
    <div >
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
            type="number"
            id="latitude"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="altitude">Altitud:</label>
          <input
            type="number"
            id="altitude"
            name="altitude"
            value={formData.altitude}
            onChange={handleChange}
            required
          />
        </div>
        
        <button className="btn-send-form-data" type="submit">Enviar</button>
        
      </form>

    </div>
  );
}