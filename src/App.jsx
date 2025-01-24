import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import `Routes`
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EducationAndCetificates from "./pages/EducationAndCetificates";
import Projects from "./pages/Projects";
import Experiance from "./pages/Experiance";
import About from "./pages/About";
import BHSDataManagement from "./pages/BhsDataManagement";
import HitechConnectMobile from "./pages/HitechConnectMobile";
import HitechConnectFirmware from "./pages/HitechConnectFirmware";
import TransportApplication from "./pages/TransportApplication";
import TouristUtilityApp from "./pages/TouristUtilityApp";

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
          <Route
            path="/projects/bhs-data-management"
            element={<BHSDataManagement />}
          />
          <Route
            path="/projects/hitech-connect-mobile"
            element={<HitechConnectMobile />}
          />
          <Route
            path="/projects/hitech-connect-firmware"
            element={<HitechConnectFirmware />}
          />
          <Route
            path="/projects/tourist-utility-app"
            element={<TouristUtilityApp />}
          />
          <Route
            path="/projects/transport-application"
            element={<TransportApplication />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
