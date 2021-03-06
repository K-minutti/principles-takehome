import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        setBreedImages({ loading: false, images: data["breedImages"] });
      });
  }, [setBreedImages]);

  return (
    <>
      <div className="row">
        <Link className="home-button row" to="/">
          <h4>Home</h4>
        </Link>

        <h1 className="dogBreed-title">{breed}</h1>
        <hr />
      </div>
      <div className="singleBreed-container">
        {imagesState.loading && <div className="loader"></div>}
        <div className="breedImages-container">
          {imagesState.images &&
            imagesState.images.map((imageLink, idx) => {
              return (
                <div className="img-container" key={`${idx}`}>
                  <img src={imageLink} alt={`Image of ${breed}`} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SingleBreed;
