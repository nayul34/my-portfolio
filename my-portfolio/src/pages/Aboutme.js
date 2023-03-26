import Introduce from "../components /Aboutme/Introduce";
import Skill from "../components /Aboutme/Skill";
import Education from "../components /Aboutme/Education";
import { motion } from "framer-motion";
const Aboutme = () => {
  const scrollToIntroduce = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSkill = () => {
    window.scrollTo({
      top: 385,
      behavior: "smooth",
    });
  };
  const scrollToEducation = () => {
    window.scrollTo({
      top: 770,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      className="w-full flex flex-col items-center justify-center "
    >
      <div className="w-4/5 flex justify-between sticky top-32 z-20 bg-white">
        <div className=" w-1/3  mt-3  flex ">
          <p className="text-xl text-slate-500 ">home ▶︎ </p>
          <p className="text-xl text-emerald-600/75 ml-3"> about me </p>
        </div>

        <div className="h-10 w-1/4 flex justify-around items-center  ">
          <button
            className="text-xl cursor-pointer text-slate-500 hover:text-emerald-600"
            onClick={scrollToIntroduce}
          >
            Introduce
          </button>
          <p className="text-xl text-slate-500">/</p>
          <button
            className="text-xl cursor-pointer text-slate-500 hover:text-emerald-600"
            onClick={scrollToSkill}
          >
            Skill
          </button>
          <p className="text-xl  text-slate-500">/</p>
          <button
            className="text-xl cursor-pointer text-slate-500 hover:text-emerald-600"
            onClick={scrollToEducation}
          >
            Education
          </button>
        </div>
      </div>
      <Introduce />
      <hr className=" w-full m-4 "></hr>
      <Skill />
      <hr className=" w-full  m-4 "></hr>
      <Education />
    </motion.div>
  );
};

export default Aboutme;
