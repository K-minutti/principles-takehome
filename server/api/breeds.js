const router = require("express").Router();
const Dogs = require("./dogAPI");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const dogResponse = await Dogs.getAllBreeds();
    const responseStatus = dogResponse["data"]["status"];

    if (responseStatus === "success") {
      const dogBreeds = dogResponse["data"]["message"];
      const allDogBreedsList = convertDogObjToList(dogBreeds);
      res.json({ breeds: allDogBreedsList });
    }
  } catch (err) {
    err.message = "Not Found";
    err.code = err.response.data.code;
    next(err);
  }
});

router.get("/:breed", async (req, res, next) => {
  try {
    const breed = req.params.breed;
    const dogResponse = await Dogs.getImagesByBreed(breed, 4); // 4 hardcoded
    const responseStatus = dogResponse["data"]["status"]; // data['code']

    if (responseStatus === "success") {
      const dogBreedImages = dogResponse["data"]["message"];
      res.json({ breedImages: dogBreedImages });
    }
  } catch (err) {
    err.message = "Not Found";
    err.code = err.response.data.code;
    next(err);
  }
});

// Helper function to convert dog api res to 1D array
const convertDogObjToList = (dogBreedsObject) => {
  const breedsList = [];
  for (const breed in dogBreedsObject) {
    if (dogBreedsObject[breed].length) {
      dogBreedsObject[breed].forEach((subBreed) => {
        breedsList.push(`${subBreed} ${breed}`);
      });
    } else {
      breedsList.push(`${breed}`);
    }
  }
  return breedsList;
};
