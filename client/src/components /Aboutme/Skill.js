import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiStyledcomponents,
  SiAxios,
  SiTailwindcss,
  SiPostman,
  SiNotion,
  SiGit,
} from "react-icons/si";
import { FaCss3Alt, FaReact, FaAws } from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux, TbBrandFigma } from "react-icons/tb";
const Skill = () => {
  const language = [
    {
      id: 0,
      icon: <SiJavascript className="text-amber-300" />,
      name: "Javascript",
    },
    {
      id: 1,
      icon: <AiOutlineHtml5 className="text-amber-700" />,
      name: "HTML",
    },
    {
      id: 2,
      icon: <FaCss3Alt className="text-cyan-800" />,
      name: "CSS",
    },
  ];
  const framework = [
    {
      id: 0,
      icon: <FaReact className="text-sky-400" />,
      name: "React",
    },
    {
      id: 1,
      icon: <TbBrandNextjs />,
      name: "Next.js",
    },
    {
      id: 2,
      icon: <TbBrandRedux className="text-violet-800" />,
      name: "Redux(redux-toolkit)",
    },
    {
      id: 3,
      icon: <SiStyledcomponents className="text-fuchsia-400" />,
      name: "Styled-component",
    },
    {
      id: 4,
      icon: <SiAxios className="text-purple-800" />,
      name: "Axios",
    },
    {
      id: 5,
      icon: <SiTailwindcss className="text-sky-400" />,
      name: "Tailwind",
    },
  ];
  const etc = [
    {
      id: 0,
      icon: <SiGit className="text-orange-500" />,
      name: "Git",
    },
    {
      id: 1,
      icon: <FaAws className="text-orange-300" />,
      name: "AWS(S3)",
    },
    {
      id: 2,
      icon: <SiPostman className="text-orange-700" />,
      name: "Postman",
    },
    {
      id: 3,
      icon: <SiNotion />,
      name: "Notion",
    },
    {
      id: 4,
      icon: <TbBrandFigma />,
      name: "Figma",
    },
  ];
  return (
    <div className="w-11/12 sm:w-4/5 bg-emerald-600/50  rounded-lg">
      <div className="m-8 ">
        <p className="text-3xl text-white font-bold">기술스택</p>
        <hr className=" w-28 "></hr>
        <div className="flex flex-col sm:flex-row  w-full justify-center ">
          <div className=" h-full bg-white w-full sm:w-1/4 sm:m-3 rounded-lg items-center flex flex-col mt-4 justify-center p-4 ">
            <div className="w-3/4 text-center border-b-[2px] border-black pb-2">
              <p className="text-xl font-bold">언어</p>
            </div>
            <div className="flex flex-col ">
              {language.map((data) => {
                return (
                  <div className="flex items-center mt-4" key={data.id}>
                    <div className="mr-3 text-2xl">{data.icon}</div>
                    <p className="text-2xl">{data.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" h-full bg-white  w-full sm:w-1/3 sm:m-3 rounded-lg items-center flex flex-col mt-4   justify-center p-4 ">
            <div className="w-3/4 text-center border-b-[2px] border-black pb-2">
              <p className="text-xl font-bold"> 프레임워크 </p>
              <p className="text-xl font-bold"> & 라이브러리</p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              {framework.map((data) => {
                return (
                  <div className="flex items-center mt-4" key={data.id}>
                    <div className="mr-3 text-2xl">{data.icon}</div>
                    <p className="text-2xl">{data.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-full bg-white w-full sm:w-1/4 sm:m-3 rounded-lg items-center flex flex-col mt-4  justify-center p-4">
            <div className="w-3/4 text-center border-b-[2px] border-black pb-2">
              <p className="text-xl font-bold">그 외 </p>
            </div>
            <div className="flex flex-col ">
              {etc.map((data) => {
                return (
                  <div className="flex items-center mt-4" key={data.id}>
                    <div className="mr-3 text-2xl">{data.icon}</div>
                    <p className="text-2xl">{data.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
