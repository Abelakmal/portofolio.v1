import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 border-b-4 fixed w-full border-black bg-white z-50">
      <a href="#home">
        <h1 className="font-bold text-3xl">
          Abel <span className="text-yellow-400">Akmal</span>
        </h1>
      </a>
      <div className="flex items-center">
        <ul className="flex mr-10 font-medium">
          <li className="ml-4">
            <a href="#home">Home</a>
          </li>
          <li className="ml-4">
            <a href="#about">About Me</a>
          </li>
          <li className="ml-4">
            <a href="#skills">Skills</a>
          </li>
          <li className="ml-4">
            <a href="#experience">Experience</a>
          </li>
          <li className="ml-4">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <a href="#contact">
        <button className="bg-yellow-400  p-2 rounded hover:bg-yellow-300">
          Hire Me
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
