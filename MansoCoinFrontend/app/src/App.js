
import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

import Homepage from "./routes/Homepage"
import MintingPage from "./routes/MintingPage"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            render={props => <Homepage {...props}/>}
            element={<Homepage/>}
          />
          <Route
            path="/minting"
            render={props => <MintingPage {...props}/>}
            element={<MintingPage/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
