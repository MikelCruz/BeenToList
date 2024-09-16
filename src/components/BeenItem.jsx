import { useState } from "react";


export const BeenItem = () => {

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    country: '',
    latitude: '',
    altitude: ''
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

    console.log('Datos del formulario:', formData);
  };


  return (
    <div >
      <h2>Formulario de Ubicación</h2>
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
        <button className="btn-send-form-data" type="submit">Go back</button>
        
      </form>
    </div>
  );
}