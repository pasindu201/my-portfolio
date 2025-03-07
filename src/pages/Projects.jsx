import React from "react";
import { useNavigate } from "react-router-dom";
import React_logo from "./../assets/react_logo.png";
import SwiftUI_logo from "./../assets/swiftUi.png";
import Cpp_logo from "./../assets/cpp_logo.png";
import SpringBoot_logo from "./../assets/spring_boot.png";
import Flutter_logo from "./../assets/flutter_logo.png";
import MySQL_logo from "./../assets/mysql.png";
import FireBase_logo from "./../assets/firebase.png";
import GoogleMaps_logo from "./../assets/google_maps_logo.png";
import Bluetooth_logo from "./../assets/bluetooth.png";
import LTSpice_logo from "./../assets/ltspice.png";
import Altium from "./../assets/altium.png";
import SW from "./../assets/sw.png";

const Projects = () => {
  const navigate = useNavigate();

  const projectList = [
    {
      title: "BHS Data Management System",
      description:
        "Data management system for a Baggage Handling System (BHS) to monitor and control baggage flow and system operations. For Katunayake International Airport, Sri Lanka.",
      technologies: [React_logo],
      route: "/projects/bhs-data-management",
    },
    {
      title: "Flower Stock Exchange",
      description:
        "Engineered a real-time stock trading and exchange platform as part of the C++ Workshop hosted by the London Stock Exchange Group. Integrated virtual client-server communication using sockets, ensuring robust system performance.",
      technologies: [Cpp_logo],
      route: "/projects/flower-stock-exchange",
    },
    {
      title: "Hitech Connect Mobile App",
      description:
        "Mobile application integrating with Bluetooth features. The app connects to a Bluetooth device, enabling control of internal systems in a caravan, such as fans, lights, and receiving sensor data.(client project-Australia)",
      technologies: [Flutter_logo, FireBase_logo, Bluetooth_logo],
      route: "/projects/hitech-connect-mobile",
    },
    {
      title: "Hitech Connect Firmware and Development",
      description:
        "Developed firmware using PlatformIO to enable connection with a mobile application. Designed and prototyped a circuit to control lights and fans, as well as measure water levels, temperature, and battery voltage.(client project)",
      technologies: [],
      route: "/projects/hitech-connect-firmware",
    },
    {
      title: "Tourist Utility App",
      description:
        "This is a client project for the Maribyrnong City Council, Australia. The project is a dashboard and backend API hosted on Heroku.",
      technologies: [SwiftUI_logo],
      route: "/projects/tourist-utility-app",
    },
    {
      title: "Transport Application",
      description:
        "It's an IoT-based system that can be used for foreign exchange market day-traders, providing email and buzzer notifications along with a mobile UI.",
      technologies: [Flutter_logo, FireBase_logo, GoogleMaps_logo],
      route: "/projects/transport-application",
    },
    {
      title: "Fit Zone",
      description:
        "A fitness application that provides a platform for users to share their workout planes, meal planes with others. Also buying and selling platform for supplements. The Website also allows users to track their fitness progress and set fitness goals.",
      technologies: [React_logo, SpringBoot_logo, MySQL_logo],
      route: "/projects/fit-zone",
    },
    {
      title: "MCQ Quiz",
      description:
        "A multiple-choice question quiz application that allows users to create quizzes, share them with others. The application also provides a leaderboard to track user scores.",
      technologies: [React_logo, SpringBoot_logo, MySQL_logo],
      route: "/projects/mcq-quiz",
    },
    {
      title: "Multistage Lead Acid Battery Charger",
      description:
        "An analog electronic project. We developed a charger that charges lead acid battery in dual stage charging mechanism. Constant current mode and constant voltage mode.",
      technologies: [LTSpice_logo, Altium, SW],
      route: "/projects/mcq-quiz",
    },
    {
      title: "Soil Monitoring System",
      description:
        "The project aims to empower farmers with precise fertilization and irrigation decisions by utilizing IoT-based soil monitoring devices that collect real-time data on vital soil parameters and displayed then on Node red dashboard.",
      technologies: [],
      route: "/projects/soil-monitoring-system",
    },
    {
      title: "Medi-Connect",
      description:
        "The project aims to empower farmers with precise fertilization and irrigation decisions by utilizing IoT-based soil monitoring devices that collect real-time data on vital soil parameters and displayed then on Node red dashboard.",
      technologies: [Flutter_logo, FireBase_logo],
      route: "/projects/medi-connect",
    },
    {
      title: "Be My Voice Mobile App",
      description:
        "Mobile application specially created to use for deaf Students to identify common sounds. Integrated with google map api to track their location by care takers.",
      technologies: [Flutter_logo, FireBase_logo, GoogleMaps_logo],
      route: "/projects/be-my-voice",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I have worked on, showcasing my
            expertise in software engineering, web development, and IoT systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 cursor-pointer"
              onClick={() => navigate(project.route)} // Navigate on click
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {/* Technologies */}
              <div className="flex gap-4 mt-4">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <img
                      src={tech}
                      alt=""
                      className="w-8 h-8"
                      title="Technology"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
