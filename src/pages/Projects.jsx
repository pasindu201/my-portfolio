import React from "react";

// Importing icons (you can use images, SVGs, or Font Awesome icons)
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";
import { SiFlask, SiHeroku, SiArduino } from "react-icons/si";

const Projects = () => {
  const projectList = [
    {
      title: "Invoice Keeper",
      description:
        "This is a Java-based software which uses MySQL database. It’s an Invoice Inventory System currently operating in two shops in Rathnapura and Awissawella. (Client Project)",
      technologies: [<FaJava key="java" />],
    },
    {
      title: "Multicore Processor using Verilog",
      description:
        "We designed an FPGA-based custom microprocessor with 4 cores, which can be used to speed up matrix multiplication using parallel processing.",
      technologies: [<FaPython key="python" />],
    },
    {
      title: "Official Website of ENTC",
      description:
        "Me and a team of eight developers built the official website of the Electronic and Telecommunication Engineering Department. I lead the team.",
      technologies: [
        <FaHtml5 key="html" />,
        <FaCss3Alt key="css" />,
        <FaJs key="js" />,
      ],
    },
    {
      title: "Easy POS",
      description:
        "This is a complete, compact Point of Sales system built with Raspberry Pi, a 10-inch touch screen, and a thermal printer.",
      technologies: [
        <FaAngular key="angular" />,
        <SiFlask key="flask" />,
        <FaPython key="python" />,
      ],
    },
    {
      title: "Whether Chart",
      description:
        "This is a client project for the Maribyrnong City Council, Australia. The project is a dashboard and backend API hosted on Heroku (Client Project).",
      technologies: [<FaNodeJs key="node" />, <SiHeroku key="heroku" />],
    },
    {
      title: "GetXchange",
      description:
        "It's an IoT-based system that can be used for foreign exchange market day-traders, providing email and buzzer notifications along with a mobile UI.",
      technologies: [<SiArduino key="arduino" />, <FaJs key="js" />],
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
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
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              {/* Technologies */}
              <div className="flex gap-2 text-2xl text-gray-300">
                {project.technologies.map((icon, i) => (
                  <span key={i}>{icon}</span>
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
