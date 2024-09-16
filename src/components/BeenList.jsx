import { IoChevronBackCircleOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
export const BeenList = ({ goBack }) => {

  const handleGoBack = () => {
    goBack();
  }


  return (
    <main>
      <h1> List of Places </h1>
      <IoChevronBackCircleOutline className="icon-go-back" onClick={handleGoBack} />
    </main>

  )
}