import { useEffect, useRef } from "react"
import { setTrainerG } from "../store/states/trainer.state"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../components/HomePage/styles/HomePage.css"
import Footer from "../components/HomePage/Footer"
import { setLoadingModalG } from "../store/states/loading.state"

const HomePage = ( { } ) => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  useEffect(() => {
    dispatch (setLoadingModalG(true))
    setTimeout(() => {
      dispatch (setLoadingModalG(false))
    }, 1500);
  }, [])


  return (
    <div className="home__Container">
      <div className="home__header">
        <img className="home__img" src="/logo.png" alt="" />
        <h2 className="home__greeting">Hi Trainer!</h2>
        <p className="home__greeting__p">To start this app, give me your trainer name</p>
        <form className="home__form" onSubmit={handleSubmit}>
          <input className="home__form__input" ref={inputTrainer} type="text"/>
          <button className="home__form__button">Go!</button>
        </form>
      </div>
        <Footer />
    </div>
  )
}

export default HomePage