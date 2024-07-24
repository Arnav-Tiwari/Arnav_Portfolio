import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import WorkDisplay from "./Components/Work/WorkDisplay";
import { useContext, useEffect } from "react";
import WorkContext from "./Components/Context/WorkContext";
function App() {
  const {getData} = useContext(WorkContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workDisplay" element={<WorkDisplay/>} />
    </Routes>
  );
}

export default App;
