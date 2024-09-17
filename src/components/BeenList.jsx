import { useSelector } from "react-redux";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { BeenItem } from "./BeenItem";

// eslint-disable-next-line react/prop-types
export const BeenList = ({ goBack }) => {
  
  const places = useSelector((state) => state.place.places);

  const handleGoBack = () => {
    goBack();
  };

  return (
    <main>
      <h2> Lista de Lugares </h2>
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />
  
      <div className="places-list">
        {places.length === 0 && <h2>¡Aun no has visitado ningún lugar!</h2>}
  
        {places.map((place, index) => (
          <BeenItem place={place} index={index} key={index} />
        ))}
      </div>
    </main>
  );
}
