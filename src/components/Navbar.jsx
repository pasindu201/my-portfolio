import "./../index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/education-and-certificates"
            className="hover:text-gray-400"
          >
            Education and Certificates
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-gray-400">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
