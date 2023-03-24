import Team from "../components /Project/Team";
import Solo from "../components /Project/Solo";
const Project = () => {
  const scrollToTeam = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSolo = () => {
    window.scrollTo({
      top: 1040,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center sticky top-32 z-20 bg-white">
        <div className="h-10 w-2/5 flex justify-around items-center  ">
          <p
            className="text-xl cursor-pointer text-emerald-600/50 hover:text-emerald-600"
            onClick={scrollToTeam}
          >
            Team
          </p>
          <p className="text-xl text-emerald-600/50">/</p>
          <p
            className="text-xl cursor-pointer text-emerald-600/50 hover:text-emerald-600"
            onClick={scrollToSolo}
          >
            Solo
          </p>
        </div>
      </div>

      <Team />
      <hr className=" w-full "></hr>
      <Solo />
    </div>
  );
};
export default Project;
