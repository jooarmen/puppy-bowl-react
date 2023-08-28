import { GetSinglePlayer, DeletePlayer } from "./ajaxHelpers"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function SinglePlayer(){
    const [player, setPlayer] = useState(null)
    const {playerId}= useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchSinglePlayerData = async () =>{
            try {
                const fetchedSinglePlayer = await GetSinglePlayer(playerId)
                setPlayer(fetchedSinglePlayer)
            } catch (error) {
                console.error("Trouble fetching single player" , error)

            }
        }
        fetchSinglePlayerData()

    },[playerId])

    const handleDelete =async ()=>{
        const deleted = await DeletePlayer(player.id);
    if (deleted) {
      navigate("/"); 
    }
    }
   

    return (
        <div>
           {player && (
                <div key={player.id}>
                    <h3>{player.name}</h3>
                    <h4>Breed: {player.breed}</h4>
                    <h4>Status: {player.status}</h4>
                    <h4>ID: {player.id}</h4>
                    <img src={player.imageUrl} />
                    <button onClick={handleDelete}>Delete</button>

                    
                </div>
            )}
        </div>
    )
}

export default SinglePlayer