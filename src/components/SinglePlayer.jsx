import { GetSinglePlayer } from "./ajaxHelpers"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function SinglePlayer(){
    const [player, setPlayer] = useState(null)
    const params= useParams()

    useEffect(()=>{
        const fetchSinglePlayerData = async () =>{
            try {
                const playerId= params.playerId
                //console.log("Fetching player with playerId:", playerId)
                const fetchedSinglePlayer = await GetSinglePlayer(playerId)
                setPlayer(fetchedSinglePlayer)
            } catch (error) {
                console.error("Trouble fetching single player" , error)

            }
        }
        fetchSinglePlayerData()

    },[params.playerId])

    return (
        <div>
           {player && (
                <div key={player.id}>
                    <h3>{player.name}</h3>
                    <h4>{player.breed}</h4>
                </div>
            )}
        </div>
    )
}

export default SinglePlayer