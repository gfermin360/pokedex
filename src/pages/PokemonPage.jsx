import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import CardStats from "../components/PokemonPage/CardStats"
import "../components/PokemonPage/styles/CardStats.css"
import "../components/PokemonPage/styles/PokemonPage.css"
import ReturnButton from "../components/PokemonPage/ReturnButton"
import Header from "../components/shared/Header"

const PokemonPage = ( { setModalLoading } ) => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {

    setTimeout(() => {
      setModalLoading(false);
    }, 2000); // Ajusta el tiempo de espera según sea necesario

}, []);

  return (
    <div>
      <Header />
      <div className="stats__body">
        <CardStats
          pokemon={pokemon}
        />
        <ReturnButton
          setModalLoading= {setModalLoading}
        />
      </div>
    </div>
  )
}

export default PokemonPage