import "./../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full shadow-md p-5">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 hover:text-gray-200 transition-all duration-300 shadow-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 hover:text-gray-200 transition-all duration-300 shadow-lg"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/education-and-certificates"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 hover:text-gray-200 transition-all duration-300 shadow-lg"
          >
            Education and Certificates
          </Link>
        </li>
        <li>
          <Link
            to="/experiance"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 hover:text-gray-200 transition-all duration-300 shadow-lg"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 hover:text-gray-200 transition-all duration-300 shadow-lg"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
