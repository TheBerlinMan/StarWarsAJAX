//npm modules
import { Route, Routes } from 'react-router-dom'

//css
import './App.css'

//components
import StarshipList from './StarshipList'



function App() {



  return (
    <>
      <StarshipList />
      <Routes>
        <Route path='/' element={<StarshipList/>}/>
      </Routes>
      
    </>
  )
}

export default App
