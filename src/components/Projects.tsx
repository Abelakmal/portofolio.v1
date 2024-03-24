import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface IData {
  name: string;
  description: string;
  image: string;
  link: string;
}

const data: IData[] = [
  {
    name: "Website Company Profile",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure deserunt neque voluptates fugit possimus quasi velit cumque voluptatibus? Harum sequi, cupiditate possimus exercitationem dolorem minima voluptatibus non. Magnam, corporis natus?",
    image: "/company-profile.png",
    link: "https://abelakmal-pwd-company-profile.vercel.app",
  },
  {
    name: "Api E-Commerce",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure deserunt neque voluptates fugit possimus quasi velit cumque voluptatibus? Harum sequi, cupiditate possimus exercitationem dolorem minima voluptatibus non. Magnam, corporis natus?",
    image: "/ecommerce.jpg",
    link: "https://github.com/Abelakmal/E-commerce"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FFFADA] h-screen w-full">
      <div className="flex flex-col items-center pt-28">
        <h1 className="font-bold text-3xl mb-2">Selected Project</h1>
        <div className="border-[3px] border-dashed pr-24 border-yellow-300"></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center px-20 mt-20">
                <div>
                  <h2 className="font-bold text-2xl mb-4">{value.name}</h2>
                  <p className="w-[80%]">{value.description}</p>
                  <a href={value.link}>
                    <button className="bg-yellow-300 hover:bg-yellow-400 shadow-md shadow-black py-2 px-4 rounded-md mt-4">
                      See {">"}
                    </button>
                  </a>
                </div>
                <div>
                  <img src={value.image} alt="company-profile" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
