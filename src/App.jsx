import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import `Routes`
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EducationAndCetificates from "./pages/EducationAndCetificates";
import Projects from "./pages/Projects";
import Experiance from "./pages/Experiance";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* Wrap Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/education-and-certificates"
            element={<EducationAndCetificates />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiance" element={<Experiance />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
