import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokemonPage from './pages/PokemonPage'
import ProtecteRoutes from './pages/ProtecteRoutes'
import { useSelector } from 'react-redux'
import LoadingModal from './components/shared/LoadingModal'
import './components/App/styles/App.css'

function App() {

  const loading = useSelector(states => states.loading)

  return (
    <div className='app__container'>
      { loading ? (
        <div className='loading__container' >
          <LoadingModal />
        </div>
      ) : ''}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtecteRoutes />} >
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokemonPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
