import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="bg-black text-black font-poiret min-h-screen flex flex-col items-center justify-center"
    >
      <div className="border w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center mb-8 font-aesthetic">Education</h1>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">University of California, Riverside</h2>
          <h3 className="text-xl font-light">
            Bachelor of Science in Computer Science
          </h3>
          <h3 className="text-xl font-light">2022 – 2025</h3>
        </div>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Relevant Coursework</h2>
          <div className="text-xl font-light">
            <p>
              Software Engineering, Data Structures &amp; Algorithms, Operating Systems,
              Theory of Automata, Compiler Design, Artificial Intelligence
            </p>
            <p>
              Web Development, Data Science, Embedded Systems, Software Testing,
              Computer Networks
            </p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="text-xl font-light">
            <p>
              <strong className="font-black">Languages:</strong> JavaScript, TypeScript,
              Python, C++, HTML, CSS
            </p>
            <p>
              <strong className="font-black">Frameworks:</strong> React, Next.js, Next Auth,
              TailwindCSS, Express.js, Node.js, Apollo Server
            </p>
            <p>
              <strong className="font-black">Tools &amp; Databases:</strong> MongoDB,
              Firebase, Supabase, PostgreSQL, SQL, SQLite, Redis, Elasticsearch, Git,
              GitHub, Cypress, Postman
            </p>
            <p>
              <strong className="font-black">Cloud &amp; DevOps:</strong> AWS (Lambda, S3,
              EC2), Docker, Kubernetes, GitHub Actions, Jenkins, Terraform
            </p>
            <p>
              <strong className="font-black">Other:</strong> Jira, Agile, Scrum
              Methodologies, GitHub Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
