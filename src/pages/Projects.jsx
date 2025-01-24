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
        "Mobile application integrating with Bluetooth features. The app connects to a Bluetooth device, enabling control of internal systems in a caravan, such as fans, lights, and receiving sensor data.",
      technologies: [Flutter_logo, FireBase_logo, Bluetooth_logo],
      route: "/projects/hitech-connect-mobile",
    },
    {
      title: "Hitech Connect Firmware and Development",
      description:
        "Developed firmware using PlatformIO to enable connection with a mobile application. Designed and prototyped a circuit to control lights and fans, as well as measure water levels, temperature, and battery voltage.",
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
