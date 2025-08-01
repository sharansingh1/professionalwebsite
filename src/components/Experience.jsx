import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern – Center for Environmental Research & Technology",
      date: "Jan 2024 – Jun 2025",
      description:
        "Engineered a full-stack air quality research platform using React, Next.js, and TailwindCSS to centralize data from 100+ sensors. Built interactive maps and data visualizations, improving researcher efficiency by automating manual processes and enabling real-time pollution trend analysis."
    },
    {
      title: "Machine Learning Engineer Intern – Bourns College of Engineering",
      date: "Jun 2024 – Aug 2024",
      description:
        "Trained and fine-tuned speech recognition models for accented English using transfer learning on multilingual audio datasets. Built data pipelines and benchmarking tools, achieving significantly lower word error rates and making speech technology more inclusive."
    },
    {
      title: "Backend Developer Intern – Trapnstudio",
      date: "Jun 2023 – Aug 2023",
      description:
        "Developed backend features for a cross-platform music app and multilingual AI chatbot. Implemented real-time queue systems and role-based authentication while optimizing performance and scalability for a smoother user experience."
    },
    {
      title: "Software Engineer Committee – ACM",
      date: "Sep 2022 – Jun 2025",
      description:
        "Collaborated with a team to develop full-stack websites for hackathons and student events. Focused on solving front-end challenges, adding features, and delivering reliable platforms used by hundreds of students during major campus events."
    }
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
            <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
            <p className="text-gray-400 mb-4">{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
