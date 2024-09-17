/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deletePlace } from "../redux/placeSlice";
import { BeenForm } from "./BeenForm";

export const BeenItem = ({ place, index}) => {
  
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

  // Seleccionamos el objeto a cambiar exacto
  const handleEditClick = (index) => {
    setSelectedPlaceIndex(index);
    setFormData(places[index]);
  };


  // Mostramos el mapa con las cordenadas
  const showInGoogleMaps = (latitude, longitude) => {
    window.open( `https://www.google.com/maps?q=${latitude},${longitude}`,"_blank")
  }

  return (
    <div key={index} className={`place-item ${place.visited ? 'visited' : ''}`}>
            <div style={{marginTop: 16}} className="place-detail">
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
              <span>¿Visitado?</span> <span>{place.visited ? 'Visitado' : 'No visitado'}</span>
            </div>
  
            <div className="place-actions">

              <FaRegEdit className="btn-edit-place" onClick={() => handleEditClick(index)} ></FaRegEdit>
              <MdDeleteOutline className="btn-delete-place" onClick={() => dispatch(deletePlace(index))} ></MdDeleteOutline>
              
            </div>
  
            <button className="place-map-button" onClick={() => showInGoogleMaps(place.latitude, place.longitude)}>
              Ver en Mapa
            </button>
  
            {selectedPlaceIndex === index && (
              <BeenForm 
              formData={formData} 
              setFormData={setFormData} 
              selectedPlaceIndex={selectedPlaceIndex} 
              setSelectedPlaceIndex={setSelectedPlaceIndex}
              />
            )}
          </div>
  )
}
