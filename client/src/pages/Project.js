import Team from "../components /Project/Team";
import Solo from "../components /Project/Solo";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white ">
      <div className="sm:w-4/5 w-full p-1 sm:p-0 flex justify-between sticky top-15 z-20 bg-white items-center">
        <div className=" w-2/4   flex ">
          <p className="sm:text-xl text-slate-500 ">home ▶︎ </p>
          <p className="sm:text-xl text-emerald-600/75 ml-3"> about me </p>
        </div>
        <div className="h-10 w-1/5 flex justify-around items-center  ">
          <p className="sm:text-xl  text-slate-500 ">Team</p>
          <p className="text-xl text-slate-500">/</p>
          <p className="sm:text-xl  text-slate-500 ">Solo</p>
        </div>
      </div>

      <Team />
      <hr className=" w-full "></hr>
      <Solo />
    </div>
  );
};
export default Project;
