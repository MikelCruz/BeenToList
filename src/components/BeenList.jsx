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
      <h1> List of Places </h1>
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />

      <ul>
        {places.map((place, index) => (
          <li key={index}>
            {place.name}, {place.city}, {place.country} ({place.latitude}, {place.altitude})
            <button onClick={() => dispatch(deletePlace(index))}>Delete</button>
            <button onClick={() => dispatch(editPlace({ index, ...place, visited: !place.visited }))}>
              Toggle Visited
            </button>
          </li>
        ))}
      </ul>


    </main>

  )
}