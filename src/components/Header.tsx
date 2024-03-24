import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="bg-[#FFFADA] h-screen w-full flex items-center justify-between px-20 font-medium"
    >
      <div className="text-2xl ">
        <p>Hi There</p>
        <p className="text-4xl font-mono font-bold">
          I'm <span className="font-sans text-yellow-500">Abel Akmal</span>
        </p>
        <p className="pb-4">I'm a Software Engginer</p>
        <button className="bg-[#ffe959] shadow-sm shadow-black rounded p-2 hover:bg-yellow-400">
          Download CV
        </button>
      </div>
    </header>
  );
};
export default Header;
