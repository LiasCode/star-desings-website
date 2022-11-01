import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contacteme from "../pages/Contacteme/Contacteme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacteme" element={<Contacteme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
