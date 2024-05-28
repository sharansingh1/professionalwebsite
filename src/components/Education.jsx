import React from "react";

function Education() {
  return (
    <div id="education" className="bg-black text-black font-poiret min-h-screen flex flex-col items-center justify-center">
      <div className="border w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center mb-8 font-aesthetic">Education</h1>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">University of California, Riverside (UCR)</h2>
          <h3 className="text-xl font-light">Bachelor of Science in Computer Science</h3>
          <h3 className="text-xl font-light">2022 - 2024</h3>
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
            <p>Java, Python, JavaScript, C++, HTML, CSS, React.js, Next.js</p>
            <p>MySQL, MongoDB</p>
            <p>Git, Docker, AWS</p>
            <p>Problem Solving, Analytical Skills</p>
            <p>Team Collaboration, Project Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
