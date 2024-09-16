import { useSelector, useDispatch } from "react-redux";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { editPlace, deletePlace} from "../redux/placeSlice";

// eslint-disable-next-line react/prop-types
export const BeenList = ({ goBack }) => {

  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);


  const handleGoBack = () => {
    goBack();
  }


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
            <button onClick={() => dispatch(editPlace({ index, ...place, visited: !place.visited }))}>
              Toggle Visited
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}