import React, { useState } from "react";
import Zebra_logo from "./../assets/zebra_logo.png";
import DotNet_logo from "./../assets/dot_net.png";
import VisualStudio_logo from "./../assets/visual_studio.png";
import USB_logo from "./../assets/usb_communication.png";
import C_Sharpe_logo from "./../assets/csharp.png";
import Cpp_logo from "./../assets/cpp_logo.png";
import Python from "./../assets/python.png";
import HTML from "./../assets/html.png";
import CSS from "./../assets/css.png";
import JavaScript from "./../assets/js.png";
import Flutter from "./../assets/flutter_logo.png";
import PlatformIo from "./../assets/platformIo.png";
import C from "./../assets/c.png";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which box is expanded

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the box
  };

  const experiences = [
    {
      company: "Zebra Technologies Lanka Ltd.",
      role: "Trainee Software Engineer",
      duration: "November 2023 - May 2024",
      responsibilities: [
        {
          title: "Zebra Communication Analyzer",
          description:
            " A Windows application built using the .NET Framework, with a\
                  backend developed in C++ and compiled into a dynamic link\
                  library (DLL). The tool automatically identifies the USB\
                  interface of connected USB barcode scanning devices. Once\
                  connected, users can upload firmware files, test device\
                  functionality by sending the commands related to different\
                  functionality, and modify firmware settings. This solution\
                  improves the firmware testing process by enhancing efficiency.",
          technologies: [
            DotNet_logo,
            VisualStudio_logo,
            USB_logo,
            C_Sharpe_logo,
            Cpp_logo,
          ],
        },
        {
          title:
            "Python Application for Streamlined Execution of .exe Files\
                  with High Input Parameters",
          description:
            "This project involved the development of a Python-based\
                  application that provides a user-friendly interface for\
                  running .exe files with a large number of input parameters.\
                  Typically, testing these .exe files requires manually typing\
                  command-line arguments each time, leading to inefficiencies\
                  and wasted time. The application addresses this challenge by\
                  enabling users to save valid input parameters for each .exe\
                  file through the interface. Once saved, the tool allows\
                  customization of input arguments and facilitates effortless\
                  execution of the .exe files. Additionally, the application\
                  features an output panel that displays the results, providing\
                  a seamless and efficient testing process.",
          technologies: [Python],
        },
        {
          title: "Parameter Management Web Application",
          description:
            " A web application that provides an user interface for updating\
                  header files associated with various firmware parameters.\
                  Front end has been developed using HTML, CSS, and JavaScript,\
                  while the back end is developed using Django framework. After\
                  uploading the header file set which is related to enabling or\
                  disabling the features of the firmware, this header files can\
                  be updated efficiently.",
          technologies: [Python, HTML, CSS, JavaScript],
        },
      ],
      logo: Zebra_logo,
    },
    {
      company: "Zero One Technologies",
      role: "Software Engineer (Part time)",
      duration: "2020 - 2022",
      responsibilities: [
        {
          title: "HiTech Connect Mobile Application",
          description:
            "Developed a mobile app integrating Bluetooth features for controlling internal systems in caravans, such as fans, lights, and sensors.",
          technologies: [Flutter],
        },
        {
          title: "HiTech Connect Firmware for ESP32",
          description:
            "Developed firmware with PlatformIO to connect to a mobile app, enabling control of devices and sensors like temperature, water levels, and battery voltage.",
          technologies: [PlatformIo, C],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">Work Experience</h1>

        {/* Experience Boxes */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Company Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {/* Company Logo */}
                  <img
                    src={experience.logo}
                    className="w-16 h-16 object-contain rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">{experience.role}</h2>
                    <p className="text-pink-500 font-medium">
                      {experience.company}
                    </p>
                    <p className="text-gray-400">{experience.duration}</p>
                  </div>
                </div>
                {/* Toggle Button */}
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
                  onClick={() => toggleDetails(index)}
                >
                  {expandedIndex === index ? "Hide Details" : "View Details"}
                </button>
              </div>

              {/* Details Section */}
              {expandedIndex === index && (
                <div className="mt-6 space-y-6">
                  {experience.responsibilities.map((task, taskIndex) => (
                    <div key={taskIndex}>
                      <h3 className="text-xl font-semibold mb-2">
                        {task.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{task.description}</p>
                      <div className="flex gap-4">
                        {task.technologies.map((tech, techIndex) => (
                          <img
                            key={techIndex}
                            src={tech}
                            alt=""
                            className="w-12 h-12 rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
