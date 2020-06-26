import React from "react";
// eslint-disable-next-line
import { Route } from "react-router-dom";
//import FirstPage from "./Components/FirstPage";
import Resume from "./Components/Resume";
import Nav from "./Components/Nav";
import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <Nav />
      <Route path="/" exact component={Navigation}></Route>
      <Route path="/Contact" exact component={Contact}></Route>
      <Route path="/Resume" exact component={Resume}></Route>
    </div>
  );
}
export default App;
