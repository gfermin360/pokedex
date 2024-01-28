import { useEffect, useRef } from "react"
import './styles/SelectPagination.css'

const SelectPagination = ({ setPokemonsForPage, modalLoading, setModalLoading, setCurrentPage }) => {


  const paginationRef = useRef()

  useEffect(() => {

    setTimeout(() => {
      setModalLoading(false);
    }, 2000); // Ajusta el tiempo de espera según sea necesario

  }, [modalLoading]);

  const handlePaginationChange = () => {
    setPokemonsForPage(Number(paginationRef.current.value))
    setModalLoading(true)
    setCurrentPage(1)
  }



  return (
    <div className="select__pagination__container">
      <select className="select__pagination" ref={paginationRef} onChange={handlePaginationChange}>
        <option key={'Pagination'} value="4" defaultValue>Pagination</option>
        <option key={4} value="4">4</option>
        <option key={12} value="12">12</option>
        <option key={20} value="20">20</option>
        <option key={32} value="32">32</option>
        <option key={50} value="52">52</option>
        <option key={10} value="104">104</option>
      </select>
    </div>
  )
}

export default SelectPagination