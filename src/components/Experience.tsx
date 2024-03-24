
const Experience = () => {
  return (
    <section id="experience" className="h-screen">
      <div className="flex flex-col items-center pt-28">
        <h1 className="font-bold text-3xl mb-2">Experience</h1>
        <div className="border-[3px] border-dashed pr-24 border-yellow-300"></div>
      </div>
      <div className="flex justify-between px-12 text-xl">
        <div>
          <h2 className="font-bold">Tigernix Solutions Indonesia</h2>
          <p className="ml-2">
            Software Enginner - <span className="text-gray-400">Full Time</span>
          </p>
        </div>
        <div className="text-end">
          <p>Feb 2024 - Now</p>
          <p>Batam, Indonesia</p>
        </div>
      </div>
      <div className="flex justify-between px-12 text-xl mt-10">
        <div>
          <h2 className="font-bold">Purwadhika</h2>
          <p className="ml-2">
            Bootcamp - <span className="text-gray-400">Student</span>
          </p>
        </div>
        <div className="text-end">
          <p>Okt 2023 - Feb 2024</p>
          <p>Batam, Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
