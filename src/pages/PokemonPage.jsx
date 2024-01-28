import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import CardStats from "../components/PokemonPage/CardStats"
import "../components/PokemonPage/styles/CardStats.css"
import "../components/PokemonPage/styles/PokemonPage.css"
import ReturnButton from "../components/PokemonPage/ReturnButton"
import Header from "../components/shared/Header"
import { useDispatch } from "react-redux"
import { setLoadingModalG } from "../store/states/loading.state"

const PokemonPage = ( { } ) => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)


  const dispatch = useDispatch()
  useEffect(() => {
    getPokemon()
    dispatch (setLoadingModalG(true))
    setTimeout(() => {
      dispatch (setLoadingModalG(false))
    }, 2000);
  }, [])

  return (
    <div>
      <Header />
      <div className="stats__body">
        <CardStats
          pokemon={pokemon}
        />
        <ReturnButton
        />
      </div>
    </div>
  )
}

export default PokemonPage