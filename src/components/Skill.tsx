
const Skill = () => {
  return (
    <section
      id="skills"
      className="h-screen  bg-[#FFFADA]"
    >
      <div className="flex  flex-col items-center pt-28">
        <h1 className="text-center text-4xl font-bold mb-2">Skills</h1>
        <div className="border-[3px] border-dashed pr-24 border-yellow-300"></div>
      </div>

      <div className="px-20 grid grid-cols-2 mt-20">
        <div className="flex gap-6">
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            React
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Tailwind
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Next Js
          </span>
        </div>
        <div className="flex gap-4 ml-4 mt-20">
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Express
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Odoo
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Spring boot
          </span>
        </div>
        <div className="mt-4 flex gap-4">
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Mysql
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Postgresql
          </span>
        </div>
        <div className="flex gap-4 ml-4 mt-20">
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Javascript
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Python
          </span>
          <span className="hover:bg-yellow-300 border-2 border-black rounded-xl shadow-md text-3xl shadow-black px-4 py-2 h-max w-max">
            Java
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
