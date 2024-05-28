import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Undergraduate Researcher",
      description: "In my role as an Undergraduate Researcher at the University of California, Riverside, I was part of a dynamic team focused on engineering a comprehensive website to centralize air quality data from diverse sources. Working closely with professionals, I contributed to the development of specialized data pages using JavaScript, Tailwind CSS, HTML, and React, significantly improving data accessibility and analysis capabilities.",
    },
    {
      title: "Software Engineer Intern",
      description: "As a member of the Software Engineer Committee at the Association for Computing Machinery (ACM), my primary responsibility was to collaborate with a diverse team in developing full-stack websites for university Hackathons. I played a hands-on role in resolving front-end challenges, implementing new features, and ensuring the quality of the websites through rigorous testing, resulting in highly functional platforms utilized by hundreds of students.",
    },
    {
      title: "Software Engineer Community",
      description: "During my internship at Trapnstudio, I had the opportunity to contribute to the development of a cross-platform app designed for users with varying levels of technical proficiency. Working within a backend team, I focused on implementing critical endpoints in a REST API using Next.js, which significantly enhanced the app's functionality and performance.",
    },
  ];

  return (
    <div id="experience" className="bg-black text-white py-20">
      <h1 className="text-4xl text-center mb-12 font-aesthetic">Experience</h1>
      <div className="flex flex-col md:flex-row font-poiret justify-center items-center gap-8 px-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-black p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-white hover:font-bold hover:text-black w-full max-w-xs md:max-w-md lg:max-w-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4">{exp.title}</h2>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
