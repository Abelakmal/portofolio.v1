import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
const Footer = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-end items-center "
    >
      <div className="text-center w-[60%] border-2 p-32 border-black rounded-md shadow-md bg-[#FFFADA] shadow-black mb-56">
        <p className="font-bold text-4xl">
          Have a project or want work with me?
        </p>
        <p className="text-gray-500 my-3">
          Please contact me by clicking the button bellow
        </p>
        <a href="mailto:abelakmal06@gmail.com">
          <button className="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-md">
            Contact me
          </button>
        </a>
      </div>
      <footer className="w-full bg-black text-white  p-3 flex justify-between">
        <p>&copy; 2024 Abel. All rights reserved.</p>
        <ul className="flex gap-4 text-2xl">
          <li>
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://id.linkedin.com/in/abel-akmal-016291233&ved=2ahUKEwiJlZX6oI2FAxUAyDgGHYH6Ce8QFnoECA4QAQ&usg=AOvVaw1BV2bzpjDUpRUMGS4RPJDw"
              target="_blank"
            >
              <PiLinkedinLogo />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/abel._.akmal/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/Abelakmal" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
