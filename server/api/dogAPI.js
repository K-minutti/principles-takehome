const axios = require("axios");
const BASE_URL = "https://dog.ceo/api";

/*  List of all breeds 'https://dog.ceo/api/breeds/list/all';
 *  List of rand breed images 'https://dog.ceo/api/breed/hound/images/random/4'
 */
const breeds = "/breeds/list/all";
const breedImagesSlug = "/images/random/";

module.exports = {
  getAllBreeds: () => {
    return axios.get(`${BASE_URL}${breeds}`);
  },
  getImagesByBreed: (selectBreed, numberOfImages) => {
    return axios.get(
      `${BASE_URL}/breed/${selectBreed}${breedImagesSlug}${numberOfImages}`
    );
  },
};
