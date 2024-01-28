import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokemonPage from './pages/PokemonPage'
import ProtecteRoutes from './pages/ProtecteRoutes'
import LoadingModal from './components/shared/LoadingModal'
import { useState } from 'react'

function App() {

  const [modalLoading, setModalLoading ] = useState(false)


  return (
    <div className='app__container'>
      <Routes>
        <Route path='/' element={<HomePage  setModalLoading= {setModalLoading} />} />
        <Route element={<ProtecteRoutes />} >
          <Route path='/pokedex' element={<PokedexPage modalLoading={modalLoading} setModalLoading= {setModalLoading} />} />
          <Route path='/pokedex/:id' element={<PokemonPage setModalLoading= {setModalLoading} />} />
        </Route>
      </Routes>
      <LoadingModal
        modalLoading={modalLoading}
      />
    </div>
  )
}

export default App
