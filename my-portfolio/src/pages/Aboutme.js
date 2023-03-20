import Introduce from "../components /Aboutme/Introduce";
import Skill from "../components /Aboutme/Skill";
import Education from "../components /Aboutme/Education";
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
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="h-12 w-4/5 bg-gray-300 flex justify-around sticky top-24 ">
        <button onClick={scrollToIntroduce}>Introduce</button>
        <button onClick={scrollToSkill}>Skill</button>
        <button onClick={scrollToEducation}>Education</button>
      </div>
      <Introduce />
      <hr className=" w-full  "></hr>
      <Skill />
      <hr className=" w-full  "></hr>
      <Education />
    </div>
  );
};

export default Aboutme;
