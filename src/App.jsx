//npm modules
import { Route, Routes } from 'react-router-dom'

//css
import './App.css'

//components
import StarshipList from './StarshipList'
import StarshipDetails from './StarshipDetails'




function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<StarshipList/>}/>
        <Route path='/starships/:starshipId' element={<StarshipDetails/>}/>
      </Routes>
      
    </>
  )
}

export default App
