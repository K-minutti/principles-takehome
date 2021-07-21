import React from "react";
import { render } from "react-dom";

function Welcome() {
  return (
    <div>
      <h1>DOGO APP IS LIVE!</h1>
    </div>
  );
}

render(<Welcome />, document.getElementById("app"));
