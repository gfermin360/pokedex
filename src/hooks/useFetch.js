import axios from "axios"
import { useState } from "react"
import { setLoadingModalG } from "../store/states/loading.state"

const useFetch = (url) => {

  const [response, setResponse] = useState()

  const getApi = () => {
    setLoadingModalG(true)
    axios.get(url)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err))
    setLoadingModalG(false)
  }

  const getTypePokemon = (urlType) => {
    setLoadingModalG(true)
    axios.get(urlType)
      .then(res => {
        const obj = {
          results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
        }
        setResponse(obj)
      })
      .catch(err => console.log(err))
      setLoadingModalG(false)
  }

  return [response, getApi, getTypePokemon]

}

export default useFetch