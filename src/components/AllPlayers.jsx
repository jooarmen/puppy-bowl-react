import { useNavigate } from 'react-router-dom';
import GetAllPlayers from './ajaxHelpers';
import { useEffect, useState } from 'react';
import NewPlayerForm from './NewPlayerForm';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        const fetchedPlayers = await GetAllPlayers();
        setPlayers(fetchedPlayers);
      } catch (error) {
        console.error("Trouble fetching players", error);
      }
    };
    fetchPlayersData();
  }, []);

  const addPlayer = (newPlayer) => {
    newPlayer.id = Date.now();
    setPlayers([...players, newPlayer]);
  };

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <h4>{player.breed}</h4>
          <img src={player.imageUrl} />
          <button onClick={() => navigate(`/players/${player.id}`)}>
            View Details
          </button>
        </div>
      ))}
      <NewPlayerForm addPlayer={addPlayer} />
    </div>
  );

}

export default AllPlayers;
