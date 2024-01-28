import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'

const SelectType = ( { setTypeSelected, modalLoading, setModalLoading} ) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  useEffect(() => {

    setTimeout(() => {
      setModalLoading(false);
    }, 2000); // Ajusta el tiempo de espera según sea necesario

}, [modalLoading]);

  const typeRef = useRef()

  const handleChange = () => {
    setTypeSelected(typeRef.current.value)
    setModalLoading(true)
  };


  return (
    <div className='body__select__container'>
      <select className="select" ref={typeRef} onChange={handleChange}>
        <option className="select__option" value='allPokemons' >All Pokemons</option>
        {
          types?.results.map(type => (
            <option
              className="select__option"
              type={type.url}
              key={type.url}
              value={type.url}
            >{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectType