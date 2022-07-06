const skills = [
  { id: 1, title: "Problem Solving", percent: "60%" },
  { id: 2, title: "Frontend Development", percent: "90%" },
  { id: 3, title: "Backend Development", percent: "80%" },
  { id: 4, title: "Blockchain Development", percent: "80%" },
];

export const Skills = () => (
  <div className="flex flex-wrap justify-center my-20 gap-x-32 gap-y-16 px-52">
    {skills.map(({id, title, percent}) => (
        <div>
        <p className="text-1xl">{title}</p>
        <div className="w-[200px] md:w-[600px] relative pt-1">
          <div className="overflow-hidden h-1 flex rounded bg-gray-300">
            <div className="bg-cyan-800" width={percent}></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
