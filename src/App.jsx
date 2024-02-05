//npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//css
import './App.css'

//services
import { getAllStarships } from '../services/sw-api'

function App() {
  
  const[starshipList, setStarshipList] = useState([])

  useEffect(() =>{
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData)
    }
    fetchStarshipList
  }, [])

  return (
    <>

    </>
  )
}

export default App
