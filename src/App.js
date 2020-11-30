import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={[`${process.env.PUBLIC_URL}/game/:id`, `${process.env.PUBLIC_URL}/`]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
