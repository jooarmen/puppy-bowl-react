import { useNavigate } from 'react-router-dom'
import GetAllPlayers from './ajaxHelpers'
import { useEffect, useState } from 'react'


function AllPlayers(){
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchPlayersData = async () =>{
            try {
                const fetchedPlayers = await GetAllPlayers()
                setPlayers(fetchedPlayers)
            } catch (error) {
                console.error("Trouble fetching players" , error)

            }
        }
        fetchPlayersData()

    },[])
    return (
        <div>
            {
            players.map((player)=>{
                return (
                    <div key={player.id}>
                        <h3>{player.name}</h3>
                        <h4>{player.breed}</h4>
                        <img src={player.imageUrl} alt={player.name} />
                        <button onClick={()=> navigate(`/players/${player.id}`)}>
                            View Details
                        </button>
                    </div>
                    
                )
            })
        }
        </div>
    )
}

export default AllPlayers
