//npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//css
import './StarshipList.css'

//services
import { getAllStarships } from '../services/sw-api'

function StarshipList() {

  
  
  const[starshipList, setStarshipList] = useState([])

  useEffect(() =>{
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if(!starshipList.length) return <h1>Loading...</h1>

  return (
    <>
      <div className='main-body'>
        <h1>STAR WARS STARSHIPS</h1>
        <div className='starship-list'>
          {starshipList.map((starship, idx) =>
            <div className="starship" key={idx}>
              {starship.name}
            </div>)}
        </div>
      </div>
    </>
  )
}

export default StarshipList
