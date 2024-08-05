import React from "react";
import { useNavigate } from "react-router-dom";

const PetList = ({ pets }) => {
  const navigate = useNavigate();
  if (pets.length === 0) return <div>No pets found</div>;

  const handleClick = (id) => {
    navigate(`/pets/${id}`);
  };

  return (
    <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}>
      {pets.map((result, index) => (
        <li
          key={result.id}
          onClick={() => handleClick(result.id)}
          style={{
            border: "1px solid black",
            margin: "10px",
            cursor: "pointer",
            width: "220px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>{result.name}</h2>
          {/* <button onClick={() => handleClick(result.id)}>show detail</button> */}
          <span>
            <b>Animal: </b>
            {result.animal}
          </span>
          <span>
            <b>Breed: </b>
            {result.breed}
          </span>
          {/* {result.images.map((results,index)=>( */}
          <span>
            <img
              src={result.images[0]}
              alt={result.name}
              key={index}
              style={{ width: "200px" }}
            />
          </span>
          {/* ))} */}
          <center>
            <b>Click for more detail</b>
          </center>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
