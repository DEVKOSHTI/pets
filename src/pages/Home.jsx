import React, { useState, useEffect } from "react";
import PetList from "../components/PetList.jsx";
import SearchForm from "../components/SearchForm.jsx";
import { Pets } from "../services/api.js";

const Home = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(pets);

  useEffect(() => {
    const AllPets = async () => {
      setLoading(true);
      const result = await Pets();
      if (result.success) {
        setPets(result.data.pets);
        // console.log(pets);
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    AllPets();
  }, []);

  return (
    <div>
      <SearchForm setPets={setPets} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!pets && <div>Pet not found</div>}
      <PetList pets={pets} />
    </div>
  );
};

export default Home;
