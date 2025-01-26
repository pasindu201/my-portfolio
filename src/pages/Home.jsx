import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Profile_pic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl text-center">
        <div className="flex justify-center mb-4">
          <img
            src={Profile_pic}
            className="w-32 h-32 object-contain rounded-full"
          />
        </div>
        {/* Greeting */}
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi There, I'm <span className="text-pink-500">Pasindu Sandeep</span>
        </h1>
        <h1 className="mt-2">
          🎓 B.Sc. Engineering (Hons) in Electronic and Telecommunication
          Engineering
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-gray-300">
          A passionate <span className="text-pink-500">Software Engineer</span>{" "}
          specializing in creating efficient, scalable, and user-friendly
          solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="/projects"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-medium transition"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
