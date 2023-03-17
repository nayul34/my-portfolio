// import Header from "../components /header";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col w-full items-center ">
      <div className=" h-80 w-4/5 bg-blue-300 flex flex-col justify-center items-center">
        <p>김나율의 포트폴리오</p>
        <p> 안녕하세요. 김나율입니다:)</p>
      </div>
      <div className="w-4/5 h-44 bg-zinc-200 flex ">
        <div className="w-1/2">
          <p>About Me</p>
          <p>김나율에 대해 소개합니다.</p>
          <button
            onClick={() => {
              navigate("/aboutme");
            }}
          >
            둘러보기
          </button>
        </div>
        <ol className="w-1/2">
          <li>Introduce</li>
          <li>Skill</li>
          <li>Education</li>
        </ol>
      </div>
      <div className=" w-4/5 h-44 bg-gray-500 flex">
        <div className="w-1/2">
          <p>Projects</p>
          <button
            onClick={() => {
              navigate("/project");
            }}
          >
            둘러보기
          </button>
        </div>
        <ol className="w-1/2">
          <li>Team</li>
          <li>개인(side project)</li>
        </ol>
      </div>
      {/* <div className="h-44 bg-yellow-100 contact"></div> */}
    </div>
  );
};

export default Main;
