import { AiOutlineHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiStyledcomponents,
  SiAxios,
  SiTailwindcss,
  SiPostman,
  SiNotion,
} from "react-icons/si";
import { FaCss3Alt, FaReact, FaAws } from "react-icons/fa";
import { TbBrandNextjs, TbBrandRedux, TbBrandFigma } from "react-icons/tb";
const Skill = () => {
  return (
    // <div className="h-96 w-4/5 skill flex flex-col items-center ">
    <div className="w-4/5 h-112 bg-emerald-600/50  rounded-lg">
      <div className="m-10 v">
        <p className="text-3xl text-white">기술스택</p>
        <hr className=" w-28 "></hr>
        <div className="flex h-28 w-full flex-col items-center">
          <div className=" h-full bg-white m-3 w-full rounded-lg  flex  p-4 ">
            <div className="w-32 flex items-center flex-col border-r-[2px] border-black">
              <p className="text-xl font-bold">언어</p>
            </div>

            <div className="flex ml-3">
              <div className="flex items-center">
                <SiJavascript />
                <p>Javascript</p>
              </div>
              <div className="flex items-center">
                <AiOutlineHtml5 />
                <p>HTML</p>
              </div>
              <div className="flex items-center">
                <FaCss3Alt />
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className=" h-full bg-white m-3 rounded-lg flex w-full p-4">
            <div className="w-32 flex items-center flex-col border-r-[2px] border-black">
              <p className="text-xl font-bold"> 프레임워크 </p>
              <p className="text-xl font-bold"> & 라이브러리</p>
            </div>

            <div className="flex ml-3">
              <div className="flex items-center">
                <FaReact />
                <p>React</p>
              </div>
              <div className="flex items-center">
                <TbBrandNextjs />
                <p>Next.js</p>
              </div>
              <div className="flex items-center">
                <TbBrandRedux />
                <p>Redux(redux-toolkit)</p>
              </div>
              <div className="flex items-center">
                <SiStyledcomponents />
                <p>Styled-component</p>
              </div>
              <div className="flex items-center">
                <SiAxios />
                <p>Axios</p>
              </div>
              <div className="flex items-center">
                <SiTailwindcss />
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className=" h-full bg-white m-3 rounded-lg flex w-full p-4">
            <div className="w-32 flex items-center flex-col border-r-[2px] border-black">
              <p className="text-xl font-bold">그 외 </p>
            </div>
            <div className="flex ml-3">
              <div className="flex items-center">
                <FaReact />
                <p>Git</p>
              </div>
              <div className="flex items-center">
                <FaAws />
                <p>AWS(S3)</p>
              </div>
              <div className="flex items-center">
                <SiPostman />
                <p>Postman</p>
              </div>
              <div className="flex items-center">
                <SiNotion />
                <p>Notion</p>
              </div>
              <div className="flex items-center">
                <TbBrandFigma />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
