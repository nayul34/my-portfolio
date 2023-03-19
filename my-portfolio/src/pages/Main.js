// import Header from "../components /header";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col h-screen w-full items-center ">
      <div className=" h-4/6 w-4/5 bg-blue-300 flex flex-col justify-center items-center">
        <p className="lg:text-7xl text-5xl ">김나율의 포트폴리오</p>
        <p className="text-3xl"> 안녕하세요.</p>
        <p className="text-3xl break-words">
          {" "}
          하고 싶은게 많은 프론트엔드개발자 김나율입니다 :)
        </p>
      </div>
      <div className="w-4/5 h-44 bg-zinc-200 flex ">
        <div className="w-1/2 m-8 flex">
          <div className="w-2/3">
            <p className="text-3xl">About Me</p>
            <p className="text-xl">김나율에 대해 소개합니다.</p>
            <button
              className="bg-orange-300"
              onClick={() => {
                navigate("/aboutme");
              }}
            >
              둘러보기
            </button>
          </div>
          <ul className="w-1/3 m-8">
            <li>Skill</li>
            <li>Introduce</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="w-1/2 m-8 flex">
          <div className="w-2/3">
            <p className="text-3xl">Projects</p>
            <button
              className="bg-orange-300"
              onClick={() => {
                navigate("/project");
              }}
            >
              둘러보기
            </button>
          </div>
          <ul className="w-1/3">
            <li>Team</li>
            <li>개인(side project)</li>
          </ul>
        </div>
      </div>
      {/* <div className="h-44 bg-yellow-100 contact"></div> */}
    </div>
  );
};

export default Main;
