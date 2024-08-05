import React, { useState, useEffect } from "react";
import { fetchBreeds, searchPets } from "../services/api.js";

const SearchForm = ({ setPets }) => {
  const [animal, setAnimal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await searchPets({
        animal,
        location,
        breed: selectedBreed,
      });
      if (response.success) {
        setPets(response.data.pets);
      } else {
        console.error("Error fetching pets:", response.message);
      }
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  useEffect(() => {
    const fetchBreedsData = async () => {
      setLoading(true);
      const result = await fetchBreeds(animal);
      if (result.success) {
        setBreeds(result.data.breeds || []);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    if (animal) {
      fetchBreedsData();
    }
  }, [animal]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        gap: "10px",
        padding: "10px",
      }}
    >
      <label>
        Animal:
        <input value={animal} onChange={(e) => setAnimal(e.target.value)} />
      </label>
      <label>
        Location:
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Breed:
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">Select Breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Search</button>
      {/* {loading && <p>Loading breeds...</p>} */}
      {error && <p>{error}</p>}
    </form>
  );
};

export default SearchForm;
