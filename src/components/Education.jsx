import React from "react";

function Education() {
  return (
    <div id="education" className="bg-black text-black font-poiret min-h-screen flex flex-col items-center justify-center">
      <div className="border w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center mb-8 font-aesthetic">Education</h1>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">University of California, Riverside (UCR)</h2>
          <h3 className="text-xl font-light">Bachelor of Science in Computer Science</h3>
          <h3 className="text-xl font-light">2022 - 2025</h3>
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Relevant Coursework</h2>
          <div className="text-xl font-light">
            <p>Data Structures and Algorithms, Operating Systems, Artificial Intelligence, Web Development, </p>
            <p>Software Engineering, Data Science, Compiler Design, Information Retrieval</p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="text-xl font-light">
              <p><strong className="font-black">Languages:</strong> JavaScript, Python, C++, HTML, CSS, SQL</p>
              <p><strong className="font-black">Frameworks & Libraries:</strong> React.js, Next.js, TailwindCSS, Express.js, Node.js</p>
              <p><strong className="font-black">Databases:</strong> MongoDB, Supabase, Firebase</p>
              <p><strong className="font-black">Tools & Platforms:</strong> Git, Docker, AWS, Vercel, Heroku</p>
              <p><strong className="font-black">Methodologies:</strong> Agile, Scrum, CI/CD</p>
              <p><strong className="font-black">Soft Skills:</strong> Problem Solving, Analytical Skills, Team Collaboration, Project Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
