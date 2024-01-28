import { useEffect } from 'react'
import SelectPage from './SelectPage'
import SelectPagination from './SelectPagination'
import './styles/Pagination.css'
import { useDispatch } from 'react-redux'
import { setLoadingModalG } from '../../store/states/loading.state'


const Pagination = ({ pokemonsForPage, currentPage, setCurrentPage, pokemons, setPokemonsForPage }) => {

  const totalPages = Math.ceil(Number(pokemons?.results.length) / Number(pokemonsForPage))
  const pageNumbers = []
  const superPages = [[]]

  let SuperPagesCount = 1
  let SuperPagesIndex = 0

  for (let i = 1; i <= totalPages; i++) {

    pageNumbers.push(i)

    if (superPages[SuperPagesIndex].length <= 5) {
      superPages[SuperPagesIndex].push(i)
      SuperPagesCount++
      if (SuperPagesCount === 6) {
        totalPages / 5 === superPages.length ? '' : superPages.push([])
        SuperPagesIndex++
        SuperPagesCount = 1
      }
    }

  }

  const dispatch = useDispatch()


  const lastPage = superPages.at(-1).at(-1)

  const HandlePreviusPage = () => {
    setCurrentPage(currentPage - 1)
    dispatch(setLoadingModalG(true))
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
  }

  const HandleNextPage = () => {
    setCurrentPage(currentPage + 1)
    dispatch(setLoadingModalG(true))
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
  }

  const handleEspesificPage = (newNumberPage) => {
    setCurrentPage(newNumberPage)
    dispatch(setLoadingModalG(true))
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
  }


  return (
    <nav className="pagination" role="navigation" aria-label="pagination">

      <ul className="pagination__ul">
        <div className='pagination__ul__container'>
          {
            superPages.map((arr, arrIndx) => (

              <div
                key={arrIndx}
                className={`pagination__ul__group__container ${arr.includes(currentPage) ? '' : 'is-none'}`}>
                {
                  arr.map((pageNumber, indx) => (
                    <li
                      key={pageNumber}
                      className="pagination__li" >

                      <button
                        className={`pagination__ul__li__button ${pageNumber === currentPage ? 'is-current' : ''}`}
                        onClick={() => handleEspesificPage(pageNumber)}
                      > {indx === 4 ? pageNumber === lastPage ? pageNumber : pageNumber + '...' : pageNumber} </button>

                    </li>
                  ))
                }
              </div>
            ))
          }
        </div>
      </ul>

      <button
        className={`pagination__button__previous ${currentPage <= 1 ? 'is-disabled' : ''}`}
        onClick={HandlePreviusPage}
        disabled={currentPage <= 1}>
        <i className='pagination__button__icon bx bx-chevrons-left' ></i>
      </button>

      <button
        className={`pagination__button__next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}
        onClick={HandleNextPage}
        disabled={currentPage >= pageNumbers.length}>
        <i className='pagination__button__icon bx bx-chevrons-right'></i>
      </button>

      <div className='pagination__selects'>
        <SelectPage
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <SelectPagination
          setPokemonsForPage={setPokemonsForPage}
          setCurrentPage={setCurrentPage}
        />

      </div>

    </nav>
  )
}

export default Pagination