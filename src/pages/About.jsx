import React from "react";

const About = () => {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "SQL",
    "MongoDB",
    "Git",
    "REST APIs",
    "Agile Development",
    "CI/CD",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="container mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Hello! I’m a passionate Software Engineer with expertise in
              designing and building scalable, user-centric applications. With a
              solid foundation in both front-end and back-end technologies, I
              specialize in delivering efficient and high-quality solutions. I
              thrive in collaborative environments and am always eager to
              embrace challenges that drive innovation.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              >
                <p className="text-lg font-semibold text-gray-300">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
