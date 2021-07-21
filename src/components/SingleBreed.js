import React, { useState, useEffect } from "react";

const SingleBreed = (props) => {
  const breed = props.match.params.breed;

  const [imagesState, setBreedImages] = useState({
    loading: false,
    images: null,
  });

  useEffect(() => {
    setBreedImages({ loading: true });
    const images = `http://localhost:3000/api/breeds/${breed}`;
    fetch(images)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["breedImages"]);
        setBreedImages({ loading: false, images: data["breedImages"] });
      });
  }, [setBreedImages]);

  return (
    <div>
      <h1>{breed}</h1>
      {imagesState.images &&
        imagesState.images.map((imageLink, idx) => {
          return (
            <div key={`${idx}`}>
              <img
                src={imageLink}
                alt={`Image of ${breed}`}
                width="200"
                height="300"
              />
            </div>
          );
        })}
    </div>
  );
};

export default SingleBreed;
