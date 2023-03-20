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
    <div className="h-96 w-4/5 bg-white skill flex flex-col items-center">
      <p className="text-3xl">기술스택</p>
      <div className="w-4/5 h-full bg-red-200 flex justify-center">
        <div className=" h-full bg-white m-5">
          언어
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
        <div className=" h-full bg-white m-5">
          프레임워크 & 라이브러리
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
        <div className=" h-full bg-white m-5">
          그 외
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
  );
};
export default Skill;
