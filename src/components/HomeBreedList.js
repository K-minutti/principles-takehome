import React, { useEffect, useState } from "react";
import Banner from "./Banner";

const HomeBreeds = () => {
  const [breedsState, setBreeds] = useState({ loading: false, breeds: null });

  useEffect(() => {
    setBreeds({ loading: true });
    const breeds = "http://localhost:3000/api/breeds";
    fetch(breeds)
      .then((res) => res.json())
      .then((data) => {
        setBreeds({ loading: false, breeds: data["breeds"] });
      });
  }, [setBreeds]);

  return (
    <div>
      {breedsState.loading && <div className="loader"></div>}

      <Banner />
      {breedsState.breeds &&
        breedsState.breeds.map((breed) => {
          return (
            <div key={breed}>
              <h4>{breed}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default HomeBreeds;
