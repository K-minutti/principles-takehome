import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import BreedListFilter from "./BreedListFilter";

const HomeBreeds = () => {
  const [breedsState, setBreeds] = useState({
    loading: false,
    breeds: null,
    allBreeds: null,
  });
  const breedsURL = "http://localhost:3000/api/breeds";

  useEffect(() => {
    setBreeds({ loading: true });
    fetch(breedsURL)
      .then((res) => res.json())
      .then((data) => {
        setBreeds({
          loading: false,
          breeds: data["breeds"],
          allBreeds: data["breeds"],
        });
      });
  }, [setBreeds]);

  const filterList = (event) => {
    event.preventDefault();
    const queryText = event.target.value.trim();
    const allBreeds = breedsState.allBreeds;
    const queryMatches = allBreeds.filter((breed) => {
      const regex = new RegExp(`^${queryText}`, "gi");
      return breed.match(regex);
    });

    setBreeds({ loading: false, breeds: queryMatches, allBreeds: allBreeds });
  };

  return (
    <div>
      <Banner />
      <BreedListFilter filterList={filterList} />

      <div className="breedList-container">
        {breedsState.loading && <div className="loader"></div>}
        <div className="breedList-grid">
          {breedsState.breeds &&
            breedsState.breeds.map((breed) => {
              return (
                <Link
                  to={`/breeds/${breed}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={breed}
                >
                  <div className="breeds-grid-card">
                    <h3>{breed}</h3>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomeBreeds;
