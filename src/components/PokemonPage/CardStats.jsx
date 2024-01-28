import './styles/CardStats.css'

const CardStats = ({ pokemon }) => {

  console.log(pokemon)

  return (
    <div>
      <article className={`pokemon__container ${pokemon?.types[0].type.name}`}>
        <header className="pokemon__header">
          <img className="pokemon__img" src={pokemon?.sprites.other['official-artwork'].front_default} alt="Pokemon art" />
        </header>
        <section className="pokemon__basic__info">
          <h2 className="pokemon__basic__info__order">{`# ${pokemon?.order}`}</h2>
          <div className='pokemon__name__container'>
            <hr className='pokemon__name__hr' />
            <h2 className='pokemon__name'>{`${pokemon?.name}`}</h2>
            <hr className='pokemon__name__hr' />
          </div>
          <div className='pokemon__measures__container'>
            <div className='pokemon__weight__container'>
              <span className='pokemon__weight__tittle'>Weight</span>
              <span className='pokemon__weight__number'>{pokemon?.weight}</span>
            </div>
            <div className='pokemon__height__container'>
              <span className='pokemon__height__tittle'>Height</span>
              <span className='pokemon__height__number'>{pokemon?.height}</span>
            </div>
          </div>
        </section>
        <section className='pokemon__medium__info'>
          <div className='pokemon__medium__info__div'>
            <div className='pokemon__types__container'>
              <h2 className='pokemon__types__tittle'>Type</h2>
              <ul className='pokemon__types__list'>
                {
                  pokemon?.types.map(typeInfo => (
                    <li className={`pokemon__types__li ${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
                  ))
                }
              </ul>
            </div>
            <div className='pokemon__skills__container'>
              <h2 className='pokemon__skills__tittle'>Skills</h2>
              <ul className='pokemon__skills__list'>
                {
                  pokemon?.abilities.map(abilitieInfo => (
                    <li className='pokemon__skills__li' key={abilitieInfo.ability.url}>{abilitieInfo.ability.name}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
        <section className='pokemon__stats__container'>
          <div className='pokemon__stats__body'>
            <div className='pokemon__stats__header'>
              <h2 className='pokemon__stats__tittle'>Stats</h2>
              <hr className='pokemon__stats__tittle__hr' />
              <div className='pokeball__container'>
                <div className='pokeball__div1'></div>
                <div className='pokeball__div2'></div>
                <div className='pokeball__div3'></div>
                <div className='pokeball__div4'></div>
                <div className='pokeball__div5'></div>
                <div className='pokeball__div6'></div>
              </div>
            </div>
            <ul className='pokemon__stats__bars__container'>
              {
                pokemon?.stats.map(statInfo => (
                  <li key={statInfo.stat.url}>
                    <div className='pokemon__stats__bars'>
                      <span className='pokemon__stats__bars__name'>{`${statInfo.stat.name} `}</span>
                      <span className='pokemon__stats__numbers'><span className='pokemon__stats__bars__number'>{`${statInfo.base_stat} / `}</span><span className='pokemon__stats__bars__number'>150</span></span>
                    </div>
                    <progress className='pokemon__stats__progress__bar' max="150" value={statInfo.base_stat}>{`${statInfo.base_stat}%`}</progress>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </article>
      <article className='pokemon__movements__container'>
        <section className='pokemon__movements__section'>
          <div className='pokemon__movements__body'>
            <div className='pokemon__movements__header'>
              <h2 className='pokemon__movements__tittle'>Movements</h2>
              <hr className='pokemon__movements__tittle__hr' />
              <div className='pokeball__container'>
                <div className='pokeball__div1'></div>
                <div className='pokeball__div2'></div>
                <div className='pokeball__div3'></div>
                <div className='pokeball__div4'></div>
                <div className='pokeball__div5'></div>
                <div className='pokeball__div6'></div>
              </div>
            </div>
            <ul className='pokemon__movements__li__container'>
              {
                pokemon?.moves.map(moveInfo => (
                  <li className='pokemon__movements__li' key={moveInfo.move.url}>{moveInfo.move.name}</li>
                ))
              }
            </ul>
          </div>
        </section>
      </article>
    </div>
  )
}

export default CardStats