import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

const PokeCard = ({ url }) => {

  const [pokemon, getPokemon] = useFetch(url)

  const pokemonPower = pokemon?.stats.reduce(function (acc, vec) {
    return acc += Number(vec.base_stat)
  },0)

  useEffect(() => {
    getPokemon()
  }, [])

  const navigate = useNavigate()
  const handleNavigatePokemon = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <div className={`pokecard__border ${pokemon?.types[0].type.name}`} onClick={handleNavigatePokemon}>
      
      <article className="pokecard">
        <header className="pokecard__header">
          <div className="pokecard__power__container">
            <h3 className="pokecard__power__tittle">Power</h3>
            <h2 className="pokecard__power__num">{pokemonPower}</h2>
          </div>
          <img className="pokecard__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon art" />
        </header>
        <section className="pokecard__body">
          <h3 className="pokecard__name">{pokemon?.name}</h3>
          <ul className="pokecard__types">
            {
              pokemon?.types.map(typeInfo => (
                <li className="pokecard__types__item" key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          <h3 className="pokecard__types__tittle">Tipo</h3>
          <hr className="pokecard__hr" />
          <ul className="pokecard__stats">
            {
              pokemon?.stats.map((statInfo, idx) => (
                <li className={`pokecard__stats__item ${statInfo.stat.name}`} key={statInfo.stat.url}>
                  <span className="pokecard__stats__value">{statInfo.stat.name === 'special-attack' ? <i className={`icon-${statInfo.stat.name} bx bx-meteor`}></i> :''}
                  {statInfo.stat.name === 'special-defense' ? <i className={`icon-${statInfo.stat.name} bx bx-shield-quarter`}></i> :''} {statInfo.base_stat}</span>
                  <span className="pokecard__stats__label">{statInfo.stat.name}</span>
                </li>
              ))
            }
          </ul>
        </section>
      </article>
    </div>
  )

}

export default PokeCard