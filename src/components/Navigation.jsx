import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="fixed w-full text-white py-4 z-20 bg-black bg-opacity-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-aesthetic font-bold">
        <Link
            to="home"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            Sharanjeet
          </Link>
        </div>
        <div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            About
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="extra"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            Extra
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mx-2 font-aesthetic cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
