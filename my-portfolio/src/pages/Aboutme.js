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
      <div className="w-full flex justify-center sticky top-32 z-20 bg-white">
        <div className="h-10 w-2/5 flex justify-around items-center  ">
          <button
            className="text-xl cursor-pointer text-emerald-600/50 hover:text-emerald-600"
            onClick={scrollToIntroduce}
          >
            Introduce
          </button>
          <p className="text-xl  text-emerald-600/50">/</p>
          <button
            className="text-xl cursor-pointer text-emerald-600/50 hover:text-emerald-600"
            onClick={scrollToSkill}
          >
            Skill
          </button>
          <p className="text-xl  text-emerald-600/50">/</p>
          <button
            className="text-xl cursor-pointer text-emerald-600/50 hover:text-emerald-600"
            onClick={scrollToEducation}
          >
            Education
          </button>
        </div>
      </div>
      <Introduce />
      <hr className=" w-full  "></hr>
      <Skill />
      <hr className=" w-full  "></hr>
      <Education />
    </motion.div>
  );
};

export default Aboutme;
