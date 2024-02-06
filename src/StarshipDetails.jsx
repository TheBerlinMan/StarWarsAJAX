//npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

//services
import { getStarship } from "../services/sw-api"

//css
import './StarshipDetails.css'


const StarshipDetails = () => {

  const[starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()

  useEffect(()=>{
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      // console.log(starshipData.results);
      setStarshipDetails(starshipData.results[0])
    }
    fetchDetails()
  }, [starshipId])


  return (  
    <>
    <div className="main-body">
      <div className="details">
        <p>NAME: {starshipDetails.name}</p>
        <p>MODEL: {starshipDetails.model}</p>
        <Link to={'/'}>Return</Link>
      </div>
    </div>
    </>
  )
}
 
export default StarshipDetails;