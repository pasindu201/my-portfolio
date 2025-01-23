import React from "react";
import UOM_LOGO from "./../assets/uom_logo.png";
import COURSERA_LOGO from "./../assets/coursera.png";
import LINK_IN_LOGO from "./../assets/linked-in.png";

const EducationAndCertificates = () => {
  const certifications = [
    {
      title: "Machine Learning",
      organization: "Coursera - University of Stanford",
      certificateURL: "https://coursera.org/verify/XYZ123",
      logo: COURSERA_LOGO,
    },
    {
      title: "Data Structure and Algorithm",
      organization: "Coursera - University of California San Diego",
      logo: COURSERA_LOGO,
    },
    {
      title: "Advanced C Programming: Optimizing Performance and Efficiency",
      organization: "LinkedIn Learning",
      logo: LINK_IN_LOGO,
    },
    {
      title: "C# Learning",
      organization: "LinkedIn Learning",
      logo: LINK_IN_LOGO,
    },
    {
      title: "Deep Learning",
      organization: "Coursera - University of London",
      logo: COURSERA_LOGO,
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      {/* Section: Education */}
      <section className="mb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Education</h1>
            <ul className="text-gray-400 space-y-2">
              <li>🎓 GCE A/L examination with island rank 261.</li>
              <li>
                🎓 B.Sc. Engineering (Hons) in Electronic and Telecommunication
                Engineer (In progress).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Degrees */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Degrees</h1>
        <div className="container mx-auto w-[70%] flex flex-col bg-pink-500 text-black ">
          <div>
            <h2 className="text-2xl font-bold">
              B.Sc.(Hons) in Electronic and Telecommunication Engineering (In
              progress)
            </h2>
            <p className="text-lg mb-4">2024 - Present</p>
          </div>
          <div className="container mx-auto flex flex-row items-centerp-6 rounded-lg shadow-lg">
            <div className="flex-1 flex justify-center w-[70%]">
              <img
                src={UOM_LOGO}
                alt="University Logo"
                className="w-40 rounded-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Course Details</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>⚡ Data Structures and Algorithms</li>
                <li>⚡ Modulo Software Design</li>
                <li>⚡ Software Design Competition</li>
                <li>⚡ Deep learning for vision</li>
                <li>⚡ Computer organization and design</li>
                <li>⚡ Internet of Things</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Certifications */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Certifications</h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 text-center p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={cert.logo}
                alt={cert.title}
                className="mx-auto mb-4 w-20 rounded-full"
              />
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-400">{cert.organization}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationAndCertificates;
