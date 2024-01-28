import { Link } from "react-router-dom"
import "./styles/ReturnButton.css"

const ReturnButton = ( {setModalLoading} ) => {

  const handleModalLoading = () => {
    setModalLoading(true)
  }

  return (
    <div>
      <button className="returnbutton"><Link onClick={handleModalLoading} to={'/pokedex'}><i className="returnbutton__icon bx bx-arrow-back"></i></Link></button>
    </div>
  )
}

export default ReturnButton