import { useState } from "react";

const COHORT_NAME = '2302-ACC-PT-WEB-PT-E'
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`


 function NewPlayerForm({ addPlayer }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlayer = {
      name: name,
      breed: breed,
      imageUrl: imageUrl,
    };


    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });

      if (response.ok) {
        const addedPlayer = await response.json();
        setName("");
        setBreed("");
        setImageUrl("");
        addPlayer(addedPlayer)

      } else {
        console.error("Failed to add player");
      }
    } catch (error) {
      console.error("Error adding player", error);
    }
  };

  return (
    <div className="form-div">
      <h2>New Player Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="breed">Breed </label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
