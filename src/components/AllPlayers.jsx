import { useNavigate } from 'react-router-dom';
import GetAllPlayers from './ajaxHelpers';
import { useEffect, useState } from 'react';
import NewPlayerForm from './NewPlayerForm';
import SearchBar from './SearchBar';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [filteredPlayers, setFilteredPlayers] = useState([]);


  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        const fetchedPlayers = await GetAllPlayers();
        setPlayers(fetchedPlayers);
        setFilteredPlayers(fetchedPlayers);
      } catch (error) {
        console.error("Trouble fetching players", error);
      }
    };
    fetchPlayersData();
  }, []);

  const addPlayer = (newPlayer) => {
    newPlayer.id = Date.now();
    setPlayers([...players, newPlayer]);
    setFilteredPlayers([...filteredPlayers, newPlayer]);
  };

  const handleSearch = (searchText) => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div >
    <SearchBar onSearch={handleSearch} />
      {filteredPlayers.map((player) => (
        <div className='puppy-cards' key={player.id}>
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
