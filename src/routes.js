import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeBreeds from "./components/HomeBreedList";
import SingleBreed from "./components/SingleBreed";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Route exact path="/" component={HomeBreeds} />
        <Route exact path="/:breed" component={SingleBreed} />
      </main>
    </Router>
  );
};

export default Routes;
