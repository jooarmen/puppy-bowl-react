
const COHORT_NAME = '2302-ACC-PT-WEB-PT-E'
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`

 async function GetAllPlayers(){
    try {
        const response = await fetch(API_URL)
        const result = await response.json()
        return result.data.players

    } catch (error) {
        console.error(error)
    }
}

export async function GetSinglePlayer(playerId){
    try {
        const response = await fetch(`/${API_URL}/${playerId}`)
        const result = await response.json()
        return result.data.player
    } catch (error) {
        console.error(error)
    }

}


export default GetAllPlayers