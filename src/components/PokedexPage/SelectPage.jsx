import { useEffect, useRef } from "react"
import './styles/SelectPage.css'

const SelectPage = ({ pageNumbers, setCurrentPage, modalLoading, setModalLoading }) => {

  const pageRef = useRef()

  useEffect(() => {

    setTimeout(() => {
      setModalLoading(false);
    }, 2000); // Ajusta el tiempo de espera según sea necesario

  }, [modalLoading]);

  const handlePageChange = () => {
    setCurrentPage(Number(pageRef.current.value))
    setModalLoading(true)
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