import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/sharanjeet-singh-/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sharansingh1" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="mailto:ssing288@ucr.edu" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
