import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Software Engineer",
      duration: "2022 - Present",
      responsibilities: [
        "Led a team of 8 engineers in designing scalable web applications.",
        "Implemented CI/CD pipelines for automated deployments using Jenkins.",
        "Collaborated with cross-functional teams to design RESTful APIs.",
        "Optimized existing systems, improving performance by 35%.",
      ],
      logo: "https://via.placeholder.com/100", // Replace with company logo
    },
    {
      company: "Innovate Tech Co.",
      role: "Software Developer",
      duration: "2020 - 2022",
      responsibilities: [
        "Developed end-to-end solutions for e-commerce applications.",
        "Worked with React, Node.js, and MongoDB to build scalable systems.",
        "Mentored junior developers and conducted weekly code reviews.",
        "Integrated third-party APIs for payment processing and analytics.",
      ],
      logo: "https://via.placeholder.com/100", // Replace with company logo
    },
    {
      company: "DevWorks",
      role: "Intern Software Engineer",
      duration: "2019 - 2020",
      responsibilities: [
        "Built microservices using Node.js and Express.",
        "Assisted in migrating legacy systems to cloud infrastructure.",
        "Conducted testing and debugging for existing applications.",
      ],
      logo: "https://via.placeholder.com/100", // Replace with company logo
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-8">Work Experience</h1>

        {/* Experiences */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Company Logo */}
              <div className="flex-shrink-0 w-24 h-24 mb-4 md:mb-0 md:mr-6">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Job Details */}
              <div>
                <h2 className="text-2xl font-bold">{experience.role}</h2>
                <p className="text-pink-500 font-medium">
                  {experience.company}
                </p>
                <p className="text-gray-400 mb-4">{experience.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
