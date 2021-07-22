import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from "./components/Navbar";
import HomeBreeds from "./components/HomeBreedList";
import SingleBreed from "./components/SingleBreed";

// const history = createBrowserHistory(); history={history}

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-container">
        <Route exact path="/" component={HomeBreeds} />
        <Route exact path="/breeds/:breed" component={SingleBreed} />
      </main>
    </Router>
  );
};

export default Routes;
