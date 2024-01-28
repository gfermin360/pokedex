import { useEffect, useRef } from "react"
import './styles/SelectPage.css'
import { useDispatch } from "react-redux"
import { setLoadingModalG } from "../../store/states/loading.state"

const SelectPage = ({ pageNumbers, setCurrentPage }) => {

  const pageRef = useRef()
  const dispatch = useDispatch()

  const handlePageChange = () => {
    dispatch(setLoadingModalG(true))
    setCurrentPage(Number(pageRef.current.value))
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
  }

  return (
    <div className="select__page__container">
      <select className="select__page" ref={pageRef} onChange={handlePageChange} aria-placeholder="Hola">
        <option key={'AllPage'} value="1" defaultValue>All Pages</option>
        {
          pageNumbers.map((pageNumber) => (
            <option
              className=""
              key={pageNumber}
              value={pageNumber}
            >{pageNumber}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectPage