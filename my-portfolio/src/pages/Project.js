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
      <div className="h-12 w-4/5 bg-gray-300 flex justify-around items-center sticky top-24">
        <p className="text-2xl " onClick={scrollToTeam}>
          Team
        </p>
        <p className="text-2xl">/</p>
        <p className="text-2xl" onClick={scrollToSolo}>
          Solo
        </p>
      </div>
      <Team />
      <hr className=" w-full  "></hr>
      <Solo />
    </div>
  );
};
export default Project;
