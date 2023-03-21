import Team from "../components /Project/Team";
import Solo from "../components /Project/Solo";
const Project = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="h-12 w-4/5 bg-gray-300 flex justify-around">
        <p>Team</p>
        <p>개인(side project)</p>
      </div>
      <Team />
      <Solo />
    </div>
  );
};
export default Project;
