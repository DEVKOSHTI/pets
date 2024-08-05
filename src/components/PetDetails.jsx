import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPetById } from "../services/api.js";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [index, setindex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(()=>{},[index])
  useEffect(() => {
    const getPetById = async (id) => {
      setLoading(true);
      const result = await fetchPetById(id);
      if (result.success) {
        setPet(result.data.pets[0]); // Assuming only one pet is returned
      } else {
        setError(result.message);
      }
      setLoading(false);
    };

    getPetById(id); // Fetch pet with ID 1
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!pet) return <div>Pet not found</div>;

  return (
    pet && (
      <div
        style={{
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Pet Details</h2>

        <div
          style={{
            border: "1px solid black",
            margin: "10px 30px",
            padding: "10px",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "yellow",
            gap: 10,
          }}
        >
          {pet.images.length != 1 && (
            <span>
              <button
                onClick={() =>
                  setindex((index - 1 + pet.images.length) % pet.images.length)
                }
              >
                {"<"}
              </button>
            </span>
          )}
          <img
            src={pet.images[index]}
            alt={pet.name}
            style={{ width: "500px" }}
          />
          {pet.images.length != 1 && (
            <span>
              <button onClick={() => setindex((index + 1) % pet.images.length)}>
                {">"}
              </button>
            </span>
          )}
          <div
            style={{
              margin: "10px",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
            }}
          >
            <div
              style={{
                margin: "10px",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                gap: "20px",
              }}
            >
              <p>
                <b>Name: </b> {pet.name}
              </p>
              <p>
                <b>Animal: </b> {pet.animal}
              </p>
              <p>
                <b>City: </b> {pet.city}
              </p>
              <p>
                <b>State: </b> {pet.state}
              </p>
              <p>
                <b>Breed: </b> {pet.breed}
              </p>
            </div>
            <div>
              <p>
                <b>Description: </b> {pet.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PetDetails;
