import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'
import { useDispatch } from 'react-redux'
import { setLoadingModalG } from '../../store/states/loading.state'

const SelectType = ( { setTypeSelected, setInputValue } ) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  

  const typeRef = useRef()
  const dispatch = useDispatch()

  const handleChange = () => {
    setInputValue('')
    dispatch(setLoadingModalG(true))
    setTypeSelected(typeRef.current.value)
    setTimeout(() => {
      dispatch(setLoadingModalG(false))
    }, 2000);
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