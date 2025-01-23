import React from "react";

const EducationAndCertificates = () => {
  const certifications = [
    {
      title: "Cryptography 1",
      organization: "Coursera - University of Stanford",
    },
    {
      title: "Machine Learning",
      organization: "Coursera - University of Stanford",
    },
    {
      title: "Industrial IoT on Google Cloud",
      organization: "Coursera - Google",
    },
    {
      title: "Software Processes and Agile Practices",
      organization: "Coursera - University of Alberta",
    },
    {
      title: "Data Structure and Algorithm",
      organization: "Coursera - University of California San Diego",
    },
    {
      title: "Responsive Website Basics: HTML, CSS, JS",
      organization: "Coursera - University of London",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      {/* Section: Education */}
      <section className="mb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Icon/Graphic */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/300" // Replace with your graduation cap image URL
              alt="Graduation Cap"
              className="w-72"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Education</h1>
            <h2 className="text-xl font-semibold mb-4">
              Achievements and Certifications
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>🎓 GCE A/L examination with island rank 201.</li>
              <li>
                🎓 B.Sc. Engineering (Hons) in Electronic and Telecommunication
                Engineer (3.86 CGPA - 1st Class).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Degrees */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Degrees</h1>
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-pink-500 text-black p-6 rounded-lg shadow-lg">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/150" // Replace with your degree logo URL
              alt="University Logo"
              className="w-32 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">
              M.Sc. in Computer Science (Reading)
            </h2>
            <p className="text-lg mb-4">2024 - Present</p>
            <h3 className="text-lg font-semibold mb-2">Course Details</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>⚡ Software System Design</li>
              <li>⚡ Enterprise Software Architectures</li>
              <li>⚡ Quality Engineering</li>
              <li>⚡ Requirements Engineering</li>
              <li>⚡ Distributed Computing</li>
              <li>⚡ Advanced Database Management Systems</li>
              <li>⚡ Software Security</li>
            </ul>
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
                src="https://via.placeholder.com/100" // Replace with your certification logo URL
                alt={cert.title}
                className="mx-auto mb-4 w-20"
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
