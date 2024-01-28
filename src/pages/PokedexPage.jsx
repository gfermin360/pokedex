import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"
import Header from "../components/shared/Header"

const PokedexPage = ( { modalLoading, setModalLoading } ) => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const [verification, setVerification] = useState(1)

  const trainerName = useSelector(states => states.trainer)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

  const [pokemonsForPage, setPokemonsForPage] = useState(12) 
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * pokemonsForPage 
  const firstIndex = lastIndex - pokemonsForPage 

  useEffect(() => {
    if (typeSelected == 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
  }, [typeSelected])

  useEffect(() => {

      setTimeout(() => {
        setModalLoading(false);
      }, 2000); 

  }, [modalLoading]);

  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputName.current.value.trim().toLowerCase())
    setModalLoading(true)

      const verificationIncludes = pokemons?.results.filter((pokeInfo) => pokeInfo.name.toLowerCase().includes(inputName.current.value.trim().toLowerCase())).length

      verificationIncludes > 0 ? setVerification(1) : setVerification(0)

  }

  console.log(verification)

  const cbFilter = (pokeInfo) => pokeInfo.name.toLowerCase().includes(inputValue)



  return (
    <div>
      <Header />
      <div className="body">
        <h2 className="body__welcome__text"><span className="body__welcome__text__span">{`Welcome ${trainerName}`}</span>, here you can find your favorite pokemon</h2>
        <div className="body__form__container">
          <form className="body__form" onSubmit={handleSearch}>
            <input className="body__form__input" ref={inputName} type="text" placeholder="Look for a pokemon"/>
            <button className="body__form__button">Search</button>
          </form>
          <SelectType
            modalLoading={modalLoading}
            setModalLoading= {setModalLoading}
            setTypeSelected={setTypeSelected}
          />
        </div>
        <div className="body__cars">
          {
            pokemons?.results.filter(cbFilter).map(pokeInfo => (


              <PokeCard
                key={pokeInfo.url}
                url={pokeInfo.url}
                setModalLoading= {setModalLoading}
              />


            )).slice(firstIndex, lastIndex)
          }
        </div>
        <div className={`body__error__message ${verification > 0 ? 'errorOf' : ''}`}>
          <h2 className="body__error__message__h2">No pokemon with that name was found. <span className="body__error__message__h2__span">Try another name!</span></h2>
        </div>
        <Pagination
          pokemonsForPage={pokemonsForPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pokemons={pokemons}
          setPokemonsForPage={setPokemonsForPage}
          setModalLoading= {setModalLoading}
          modalLoading={modalLoading}
        />
      </div>

    </div>
  )
}

export default PokedexPage